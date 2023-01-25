import { NextApiRequest, NextApiResponse } from 'next'
import { ResumeViewModes } from '../../context/types'
import edgeChromium from 'chrome-aws-lambda'
import puppeteer from 'puppeteer-core'

const saveAsPdf = async (url: string) => {
  const executablePath = await edgeChromium.executablePath

  const browser = await puppeteer.launch({
    executablePath,
    args: edgeChromium.args,
    headless: true
  })

  const page = await browser.newPage()

  await page.goto(url, {
    waitUntil: 'domcontentloaded'
  })

  const result = await page.pdf()
  await browser.close()

  return result
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { mode = '' } = req.query
  const isFullMode =
    (mode as string).toLowerCase() === ResumeViewModes.FULL.toLowerCase()
  const fileName = `Andrei Constantinescu - ${
    isFullMode ? 'Full' : 'Lite'
  } Resume`
  res.setHeader('Content-Disposition', `inline; filename="${fileName}.pdf"`)
  res.setHeader('Content-Type', 'application/pdf')
  const url = isFullMode
    ? 'https://constantinescu.io/?mode=full'
    : 'https://constantinescu.io'

  const pdf = await saveAsPdf(url as string)

  return res.send(pdf)
}
