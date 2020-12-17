import React from 'react'
import {UserContext, UserContextType} from '../../contexts/User'
import styled from 'styled-components'
import colors from '../../config/colors'

const Header = () => {
  const {currentUser} = React.useContext(UserContext) as UserContextType

  return (
    <Header.Element>
      <Header.Brand>Domicilios Test</Header.Brand>
      {currentUser.firstName ? (
        <Header.UserName>Hola! {currentUser.firstName}</Header.UserName>
      ) : null}
    </Header.Element>
  )
}

Header.Element = styled.header`
  padding: 1rem;
  background-color: ${colors.white};
  color: ${colors.black};
  border-bottom: 1px solid ${colors.border};
  box-shadow: 0 0 15px ${colors.border};
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`

Header.Brand = styled.p`
  font-weight: bold;
  font-size: 18px;
  margin: 0;
  @media screen and (min-width: 768px) {
    grid-column: 6 / 8;
    text-align: center;
  }
`
Header.UserName = styled.p`
  text-align: right;
  grid-column: 9 / 13;
  margin: 0;
`

export default Header
