import styled from 'styled-components'

const Layout = styled.div`
  display: grid;
  grid-gap: 2rem;
`

export const LayoutFeed = styled.section`
  display: grid;
  grid-gap: 2rem;
  width: clamp(30ch, 100%, 80ch);
  margin: 0 auto;
`
export default Layout
