const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3')
const { readdir } = require('fs/promises')
const path = require('path')
const { createReadStream } = require('fs')
const os = require('os')

if (!process.env.VERCEL || !process.env.CI) {
  require('dotenv').config({ path: '.env.local' })
}

class CIFileUploader {
  constructor(options = {}) {
    this.s3Client = new S3Client({
      region: options.region || process.env.AWS_REGION || 'us-east-1',
      credentials: {
        accessKeyId: options.accessKeyId || process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey:
          options.secretAccessKey || process.env.AWS_SECRET_ACCESS_KEY
      }
    })
    this.bucket = options.bucket || process.env.S3_BUCKET_NAME
    this.prefix = options.prefix || 'resume/'
  }

  // Determine the most appropriate CI temp directory
  getCITempDirectory() {
    // GitHub Actions
    if (process.env.GITHUB_WORKSPACE) {
      return path.join(process.env.GITHUB_WORKSPACE, 'temp')
    }

    // GitLab CI
    if (process.env.CI_PROJECT_DIR) {
      return path.join(process.env.CI_PROJECT_DIR, 'temp')
    }

    // Vercel
    if (process.env.VERCEL) {
      return '/tmp'
    }

    // Generic CI environments
    if (process.env.CI) {
      return os.tmpdir()
    }

    // Fallback to local temp directory
    return path.join(process.cwd(), 'temp')
  }

  async uploadDirectory(localPath = this.getCITempDirectory()) {
    try {
      console.log(`Attempting to upload files from: ${localPath}`)

      const files = await this.getFilesRecursively(localPath)

      console.log(`Found ${files.length} files to upload`)

      const uploadPromises = files.map(async (filePath) => {
        const relativePath = path.relative(localPath, filePath)
        const s3Key = path.join(this.prefix, relativePath).replace(/\\/g, '/')

        return this.uploadFile(filePath, s3Key)
      })

      const results = await Promise.allSettled(uploadPromises)

      return {
        total: results.length,
        successful: results.filter((r) => r.status === 'fulfilled').length,
        failed: results
          .filter((r) => r.status === 'rejected')
          .map((r) => r.reason),
        files: files
      }
    } catch (error) {
      console.error('Directory upload failed:', error)
      throw error
    }
  }

  async uploadFile(localFilePath, s3Key) {
    const fileStream = createReadStream(localFilePath)

    const uploadParams = {
      Bucket: this.bucket,
      Key: s3Key,
      Body: fileStream
    }

    try {
      const command = new PutObjectCommand(uploadParams)
      const result = await this.s3Client.send(command)

      console.log(`Uploaded: ${s3Key}`)
      return result
    } catch (error) {
      console.error(`Upload failed for ${s3Key}:`, error)
      throw error
    }
  }

  async getFilesRecursively(dir) {
    try {
      const files = []
      const items = await readdir(dir, { withFileTypes: true })

      for (const item of items) {
        const fullPath = path.join(dir, item.name)

        if (item.isDirectory()) {
          const subFiles = await this.getFilesRecursively(fullPath)
          files.push(...subFiles)
        } else if (item.isFile()) {
          files.push(fullPath)
        }
      }

      return files
    } catch (error) {
      console.error(`Error reading directory ${dir}:`, error)
      return []
    }
  }
}

// Script execution
async function uploadCIFiles() {
  try {
    const uploader = new CIFileUploader()
    const uploadResult = await uploader.uploadDirectory()

    console.log('Upload Summary:', JSON.stringify(uploadResult, null, 2))

    // Exit with non-zero status if any uploads failed
    process.exit(uploadResult.failed.length > 0 ? 1 : 0)
  } catch (error) {
    console.error('CI File Upload Process Failed:', error)
    process.exit(1)
  }
}

// Only run if called directly
if (require.main === module) {
  uploadCIFiles()
}

module.exports = CIFileUploader
