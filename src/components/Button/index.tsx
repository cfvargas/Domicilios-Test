import {ButtonHTMLAttributes} from 'react'
import styled from 'styled-components'
import appearances from './appearances'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  appearance: 'primary' | 'secondary'
}

const Button = styled.button<ButtonProps>`
  border: none;
  padding: 7px 1.5rem;
  border-radius: 3px;
  outline: none;
  cursor: pointer;

  color: ${props => appearances[props.appearance].text};
  background-color: ${props => appearances[props.appearance].background};

  &:active {
    transform: scale(0.95);
  }
`

export default Button
