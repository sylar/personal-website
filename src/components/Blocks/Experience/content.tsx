import { ExperienceBlockContentProps } from './types'
import Md from '../../Md'
import { BlockList } from '../styled'
import { CompanyDescription } from './styled'
import { useResumeCxt } from '../../../context/resume.context'

const ExperienceBlockContent = (
  props: ExperienceBlockContentProps
): JSX.Element => {
  const {
    state: { liteModeOn }
  } = useResumeCxt()

  return (
    <>
      {!liteModeOn && (
        <Md
          components={{ p: (props) => <CompanyDescription {...props} /> }}
          source={props.description}
        />
      )}
      <Md
        components={{ ul: (props) => <BlockList {...props} /> }}
        source={props.duties}
      />
    </>
  )
}

export default ExperienceBlockContent
