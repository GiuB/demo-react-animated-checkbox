import styled from 'styled-components'

import theme from 'assets/theme'

export const Wrapper = styled.span.attrs((props) => ({}))`
  margin-left: 0.9rem;
  margin-top: 0.2rem;
  display: block;
  color: ${theme.colors.error};
`
