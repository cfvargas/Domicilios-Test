import React from 'react'
import {v4 as uuid} from 'uuid'

export const UserContext = React.createContext({})

function getCurrentUserFromLocalStorage() {
  return JSON.parse(localStorage.getItem('user') || '{}')
}

export type userType = {
  id: string
  firstName: string
  lastName: string
  picture: string
}

export type UserContextType = {
  currentUser: userType
  addUser: (firstName: string, lastName: string) => void
}

const UserProvider: React.FC = ({children}) => {
  const [currentUser, setCurrentUser] = React.useState<userType>(
    getCurrentUserFromLocalStorage,
  )

  function addUser(firstName: string, lastName: string) {
    setCurrentUser({
      id: uuid(),
      firstName,
      lastName,
      picture: `https://picsum.photos/${Math.floor(
        Math.random() * (190 - 200) + 190,
      )}`,
    })
  }

  React.useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currentUser))
  }, [currentUser])

  return (
    <UserContext.Provider value={{currentUser, addUser}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
