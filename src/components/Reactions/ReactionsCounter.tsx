import React from 'react'
import styled from 'styled-components'
import likeIcon from '../../assets/icons/like.png'
import loveIcon from '../../assets/icons/love.png'
import careIcon from '../../assets/icons/care.png'
import colors from '../../config/colors'

const icons: any = {
  like: {src: likeIcon, alt: 'like icon'},
  love: {src: loveIcon, alt: 'love icon'},
  care: {src: careIcon, alt: 'care icon'},
}

type userType = {
  id: string
  firstName: string
  lastName: string
}

export type reactionType = {
  [key: string]: userType[]
}

export interface ReactionsCounterProps {
  reactions: reactionType
}

const ReactionsCounter = ({reactions}: ReactionsCounterProps) => {
  function getReactionsLength() {
    return Object.getOwnPropertyNames(reactions).reduce((acc, key) => {
      return acc + reactions[key].length
    }, 0)
  }

  return (
    <ReactionsCounter.Element>
      {Object.getOwnPropertyNames(reactions).map((type: string) => {
        if (reactions[type].length) {
          return <img key={type} src={icons[type].src} alt={icons[type].alt} />
        }
        return null
      })}
      <span data-testid="counter">{getReactionsLength()}</span>
    </ReactionsCounter.Element>
  )
}

ReactionsCounter.Element = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 15px;
  }

  span {
    font-size: 14px;
    color: ${colors.green};
    font-weight: bold;
    vertical-align: center;
    margin-left: 4px;
  }
`

export default ReactionsCounter
