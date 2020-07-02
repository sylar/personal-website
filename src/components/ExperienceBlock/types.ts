export enum JobType {
  CONTRACT = 'contract',
  PERMANENT = 'permanent'
}

export type Company = {
  name: string
  description: string
  url?: string
}

export type Job = {
  type: JobType
  title: string
  startDate: number
  endDate?: number
  duties: string
}

export type ExperienceBlockProps = {
  company: Company
  job: Job
  techStack?: string[]
}

export type ExperienceBlockHeadingProps = {
  company: Company
  job: Omit<Job, 'duties'>
}

export type ExperienceBlockContentProps = Pick<Job, 'duties'> &
  Pick<ExperienceBlockProps, 'techStack'>
