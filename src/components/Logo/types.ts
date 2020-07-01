export enum LogoSizes {
  SMALL = 'small',
  MEDIUM = 'medium'
}

export type LogoProps = {
  src: string
  size?: LogoSizes
}
