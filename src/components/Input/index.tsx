import {InputHTMLAttributes} from 'react'
import colors from '../../config/colors'
import styled from 'styled-components'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  color?: 'green' | 'black'
}

const Input = styled.input<InputProps>`
  width: 100%;
  border: 1px solid ${colors.border};
  padding: 1rem 10px;
  outline: none;
  color: ${props => colors[props.color || 'black']};
  box-sizing: border-box;

  &:focus,
  &:active {
    border-color: ${colors.green};
  }
`

export default Input
