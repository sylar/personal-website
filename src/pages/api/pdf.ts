import { NextApiRequest, NextApiResponse } from 'next'
import puppeteer from 'puppeteer'
import { ResumeViewModes } from '../../context/types'

const saveAsPdf = async (url: string) => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.goto(url, {
    waitUntil: 'networkidle0'
  })

  const result = await page.pdf({
    format: 'a4'
  })
  await browser.close()

  return result
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { mode } = req.query
  const isFullMode =
    (mode as string).toLocaleLowerCase() ===
    ResumeViewModes.FULL.toLocaleLowerCase()
  const fileName = `Andrei Constantinescu - ${
    isFullMode ? 'Full' : 'Lite'
  } Resume`
  res.setHeader('Content-Disposition', `attachment; filename="${fileName}.pdf"`)
  res.setHeader('Content-Type', 'application/pdf')
  const url = isFullMode
    ? 'https://constantinescu.io/?mode=full'
    : 'https://constantinescu.io'

  const pdf = await saveAsPdf(url as string)

  return res.send(pdf)
}
