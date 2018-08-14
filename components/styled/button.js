import styled from 'react-emotion'

const Button = styled('button')(({customCss}) => ({...customCss}))

Button.displayName = 'Button'
Button.defaultProps = {
  customCss: {}
}

export default Button
