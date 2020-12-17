import React from 'react'
import styled from 'styled-components'
import colors from '../../config/colors'

export interface BoxProps {
  appearance?: 'lightGray' | 'white'
  children: React.ReactNode
}

const Box = (props: BoxProps) => <Box.Element {...props} />

Box.Element = styled.div<BoxProps>`
  background-color: ${props => colors[props.appearance || 'white']};
  border: 1px solid ${colors.border};
  box-shadow: 0 0 15px 0 ${colors.border};
`

Box.Body = styled.div`
  padding: 1rem;
`

interface FooterProps {
  align?: 'center' | 'flex-start' | 'flex-end' | 'space-between'
}

Box.Footer = styled.div<FooterProps>`
  border-top: 1px solid ${colors.border};
  padding: 0.5rem;
  display: flex;
  justify-content: ${props => props.align || 'flex-start'};
  align-items: center;
`

export default Box
