import styled from 'styled-components'
import colors from '../../config/colors'

const Layout = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
  align-items: flex-start;
  grid-gap: 2rem;
  background-color: ${colors.background};
`

export const LayoutFeed = styled.section`
  display: grid;
  grid-gap: 2rem;
  width: clamp(30ch, 100%, 80ch);
  margin: 0 auto;
`
export default Layout
