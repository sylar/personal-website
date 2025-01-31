export type Company = {
  companyName: string
  companyDescription: string
  companyUrl?: string
  companyIndustry?: string
}

export type Job = {
  type: string
  jobTitle: string
  startDate: number
  endDate?: number
  tasks?: string
  tasksDetails?: string
  techStack?: string[]
}

export type Workplace = Company & Job & { tier?: number }

export type Experience = Workplace & {
  clients?: Workplace[]
}

export type CompanyHeader = Company &
  Pick<Job, 'startDate' | 'endDate' | 'type' | 'jobTitle'> & {
    isClient?: boolean
  }

export type PreviousWorkplace = Omit<CompanyHeader, 'companyDescription'>

export enum JOB_TYPE {
  CONTRACT = 'contract',
  PERMANENT = 'permanent',
  FREELANCE = 'freelance'
}

export enum TIERS {
  VISIBLE = 1,
  HIDDEN = 2
}

export type ExperienceBlockContentType = {
  isDetailedView?: boolean
  experienceItem: Experience
}
