const query = `
  type Stack {
    name: String
    url: String
  }

  type Task {
    description: String
    stack: [Stack]
  }

  type Company {
    name: String
    description: String
    url: Url
    logo: String
  }

  type ExperienceSliceItem {
    title: String
    company: Company
    startDate: String
    endDate: String
    currentJob: String
    type: String
    tasks: [Task]
  }

  type SideProjectsSliceItem {
    title: String
    url: String
    description: String
  }

  type ExperienceSlice {
    title: String
    content: [ExperienceSliceItem]
  }

  type SideProjectsSlice {
    title: String
    content: [SideProjectsSliceItem]

  }

  type HobbiesSlice {
    title: String
    description: String
  }

  type Slices {
    experience: ExperienceSlice
    sideProjects: SideProjectsSlice
    hobbies: HobbiesSlice
  }

  type ResumePage implements Page {
    lastUpdate: String!
    title: String
    email: String
    slices: Slices
    logo: String
    location: String
  }

  type Url {
    name: String
    url: String
    target: String
  }

  interface Page {
    lastUpdate: String!
  }

  type HomePage implements Page {
    lastUpdate: String!
    title: String
    description: String
    urlsBlock: [Url]
    logo: String
  }

  type Query {
    resume: ResumePage
    homepage: HomePage
  }
`

module.exports = query
