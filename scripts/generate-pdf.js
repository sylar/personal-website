/* eslint-disable @typescript-eslint/no-require-imports */

const puppeteer = require('puppeteer')
const { mkdir } = require('fs/promises')
const path = require('path')
const os = require('os')

function getCITempDirectory() {
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

async function generatePDFWithPuppeteer() {
  // Determine temporary directory
  const tmpDir = getCITempDirectory()

  // Ensure directory exists
  await mkdir(tmpDir, { recursive: true })

  // Unique PDF path
  const detailedResumePath = path.join(
    tmpDir,
    `Andrei Constantinescu Detailed Resume.pdf`
  )
  const resumePath = path.join(tmpDir, `Andrei Constantinescu Resume.pdf`)

  let browser = null
  try {
    // Launch browser with serverless-friendly flags
    browser = await puppeteer.launch({
      headless: 'new',
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage'
      ]
    })

    const page = await browser.newPage()

    // Navigate to deployed site
    const deployedUrl = process.env.VERCEL_URL || 'http://localhost:3000'

    await page.goto(`${deployedUrl}/resume`, {
      waitUntil: 'networkidle0',
      timeout: 60000
    })

    await page.emulateMediaType('print')

    // Generate PDF
    await page.pdf({
      path: resumePath
    })

    console.log(`PDF generated: Resume`)

    await page.goto(`${deployedUrl}/resume?view=full`, {
      waitUntil: 'networkidle0',
      timeout: 60000
    })

    await page.emulateMediaType('print')

    // Generate PDF
    await page.pdf({
      path: detailedResumePath
    })

    console.log(`PDF generated: Detailed Resume`)
  } catch (error) {
    console.error('Error in Puppeteer PDF generation:', error)
    throw error
  } finally {
    // Close browser if launched
    if (browser) await browser.close()
  }
}

// Wrapper for CI-safe execution
async function ciSafePDFGeneration() {
  try {
    await generatePDFWithPuppeteer()
    console.log('PDF Generation Complete')
    process.exit(0)
  } catch (error) {
    console.error('PDF Generation Process failed:', error)
    process.exit(1)
  }
}

// Only run if called directly
if (require.main === module) {
  ciSafePDFGeneration()
}

module.exports = ciSafePDFGeneration
