import React from 'react'
import {UserContext, UserContextType} from '../../contexts/User'
import {Feed, AddPost, Input, Button, Box} from '../'

const PrivateComponent = () => {
  const [user, setUser] = React.useState({firstName: '', lastName: ''})
  const {currentUser, addUser} = React.useContext(
    UserContext,
  ) as UserContextType
  const [showAddUser, setShowAddUser] = React.useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    addUser(user.firstName, user.lastName)
    setShowAddUser(false)
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    })
  }

  function handleChangeUser() {
    setShowAddUser(true)
  }

  if (showAddUser || !currentUser.id) {
    return (
      <form onSubmit={handleSubmit}>
        <Box>
          <Box.Body>
            <Input
              value={user.firstName}
              onChange={handleChange}
              placeholder="Primer Nombre"
              required
              type="text"
              name="firstName"
            />
            <Input
              value={user.lastName}
              onChange={handleChange}
              placeholder="Primer Apellido"
              required
              type="text"
              name="lastName"
            />
          </Box.Body>
          <Box.Footer align="flex-end">
            <Button appearance="primary">Agregar usuario</Button>
          </Box.Footer>
        </Box>
      </form>
    )
  }
  return (
    <React.Fragment>
      <Button appearance="primary" onClick={handleChangeUser}>
        Cambiar de usuario
      </Button>
      <AddPost />
      <Feed />
    </React.Fragment>
  )
}

export default PrivateComponent
