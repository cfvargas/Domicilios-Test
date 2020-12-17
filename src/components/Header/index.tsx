import styled from 'styled-components'
import colors from '../../config/colors'

const Header = styled.header`
  padding: 1rem;
  text-align: center;
  background-color: ${colors.white};
  color: ${colors.black};
  font-weight: bold;
  font-size: 18px;
  border-bottom: 1px solid ${colors.border};
  box-shadow: 0 0 15px ${colors.border};
`

export default Header
