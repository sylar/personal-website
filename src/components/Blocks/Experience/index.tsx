import { ExperienceBlockProps } from './types'
import Heading from './heading'
import Content from './content'
import { ExperienceBlock } from './styled'

const ExperienceBlockComponent = ({
  company,
  job
}: ExperienceBlockProps): JSX.Element => {
  return (
    <ExperienceBlock type={job.type}>
      <Heading company={company} job={job} />
      {job.type.toLocaleLowerCase() !== 'freelancing' && (
        <>
          <Content
            duties={job.duties}
            description={company.description}
            jobs={job.jobs || []}
          />
        </>
      )}

      {job.type.toLocaleLowerCase() === 'freelancing' && (
        <>
          {job.jobs.map((j, idx) => {
            return (
              <ExperienceBlock key={`dsada_${idx}`} type={j.type}>
                <Heading
                  company={{ name: j.company }}
                  job={{ ...j, title: j.jobTitle }}
                />
                <Content
                  key={`j_${idx}`}
                  duties={j.tasks}
                  description={j.description}
                  jobs={j.jobs || []}
                />
              </ExperienceBlock>
            )
          })}
        </>
      )}
    </ExperienceBlock>
  )
}

export default ExperienceBlockComponent
