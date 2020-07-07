import { LinkProps } from '../components/Link/types'
import {
  Job,
  ExperienceBlockProps
} from '../components/Blocks/Experience/types'
import { Project } from '../components/Blocks/Projects/types'
export type EducationEntry = {
  degree: string
  institution: string
  startYear: number
  endYear: number
}

export type ExperienceEntry = {
  company: string
  description: string
  jobTitle: string
  tasks: string
} & Pick<Job, 'endDate' | 'startDate' | 'type'> &
  Pick<ExperienceBlockProps, 'techStack'>

export type PersonalDataType = {
  links: LinkProps[]
  description: string
  hobbies: string
  education: EducationEntry
}

export type ResumePageProps = {
  personalData: PersonalDataType
  experienceData: ExperienceEntry[]
  projectsData: Project[]
}

export type HomePageProps = {
  personalData: PersonalDataType
}
