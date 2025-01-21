import { ReactMarkdownProps } from 'react-markdown'

export type MdProps = Pick<typeof ReactMarkdownProps, 'components' | 'source'>
