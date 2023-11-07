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
        <Md components={{ paragraph: CompanyDescription }}>
          {props.description}
        </Md>
      )}
      <Md components={{ list: BlockList }}>{props.duties}</Md>
    </>
  )
}

export default ExperienceBlockContent
