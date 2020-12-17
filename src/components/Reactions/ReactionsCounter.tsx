import React from 'react'
import styled from 'styled-components'
import likeIcon from '../../assets/icons/like.png'
import loveIcon from '../../assets/icons/love.png'
import careIcon from '../../assets/icons/care.png'
import colors from '../../config/colors'

const icons = {
  like: {src: likeIcon, alt: 'like icon'},
  love: {src: loveIcon, alt: 'love icon'},
  care: {src: careIcon, alt: 'care icon'},
}

export type reactionType = {
  type: 'like' | 'love' | 'care'
  users: {
    firstName: string
    lastName: string
  }[]
}

export interface ReactionsCounterProps {
  reactions: reactionType[]
}

const ReactionsCounter = ({reactions}: ReactionsCounterProps) => {
  function getReactionsLength() {
    return reactions.reduce((acc, reactionsByType) => {
      return acc + reactionsByType.users.length
    }, 0)
  }

  return (
    <ReactionsCounter.Element>
      {reactions.map(reaction => (
        <img
          key={reaction.type}
          src={icons[reaction.type].src}
          alt={icons[reaction.type].alt}
        />
      ))}
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
