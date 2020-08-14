export type Company = {
  name: string
  description: string
  url?: string
}

export type Job = {
  type: string
  title: string
  startDate: number
  endDate?: number
  duties: string
  jobs?: Job[]
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

export type ExperienceBlockContentProps = Pick<Job, 'duties' | 'jobs'> &
  Pick<ExperienceBlockProps, 'techStack'> &
  Pick<Company, 'description'>
