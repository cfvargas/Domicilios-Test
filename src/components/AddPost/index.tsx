import React from 'react'
import {Button, Input, Box} from '../'

const AddPost = () => {
  const [message, setMessage] = React.useState('')
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  function handleOnchange(event: React.ChangeEvent<HTMLInputElement>) {
    setMessage(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Box>
        <Input
          required
          value={message}
          onChange={handleOnchange}
          name="message"
          color="green"
          type="text"
          placeholder="Escribe aquí tu estado"
        />
        <Box.Footer align="flex-end">
          <Button appearance="primary">Publicar</Button>
        </Box.Footer>
      </Box>
    </form>
  )
}

export default AddPost
