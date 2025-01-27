import { Project } from 'next/dist/build/swc/types'
import { LinkProps } from 'next/link'
import { Company, Job } from '../components/Blocks/Experience/types'

export type EducationEntry = {
  degree: string
  institution: string
  startYear: number
  endYear: number
}

export type ExperienceEntry = Company & {
  jobTitle: string
  tasks: string
} & Pick<Job, 'endDate' | 'startDate' | 'type' | 'techStack'>

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
