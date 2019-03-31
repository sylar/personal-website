import styled from '@emotion/styled'

const Button = styled('button')(({ customCss }) => ({ ...customCss }))

Button.displayName = 'Button'
Button.defaultProps = {
  customCss: {}
}

export default Button
