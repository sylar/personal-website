import ExperienceBlock from './condensedContent'
const ExperienceComponent = (props: any) => {
  return (
    <>
      {props.job.map((item) => (
        <ExperienceBlock
          key={`tierA_${item.startDate}`}
          company={{
            description: item.description,
            name: item.company,
            industry: item.industry
          }}
          job={{ ...item, duties: item.tasks, title: item.jobTitle }}
        />
      ))}
    </>
  )
}

export default ExperienceComponent
