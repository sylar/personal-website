export enum LogoSizes {
  SMALL = 'small',
  MEDIUM = 'medium'
}

export type LogoContainerProps = {
  src: string
  round?: boolean
  size?: LogoSizes
}

export type LogoProps = Pick<LogoContainerProps, 'src' | 'round'>
