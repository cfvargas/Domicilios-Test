import React from 'react'
import styled from 'styled-components'
import likeIcon from '../../assets/icons/like.png'
import loveIcon from '../../assets/icons/love.png'
import careIcon from '../../assets/icons/care.png'
import colors from '../../config/colors'
import {Button} from '../'
import ReactionsCounter from './ReactionsCounter'

export interface ReactionsProps {
  handleReactionClick: (reactionType: string) => void
}

const Reactions = ({handleReactionClick}: ReactionsProps) => {
  const [showReactions, setShowReactions] = React.useState(false)

  function hanldeIconClick(event: React.MouseEvent<HTMLButtonElement>) {
    handleReactionClick(event.currentTarget.name)
    setShowReactions(false)
  }

  return (
    <Reactions.Element
      onMouseEnter={() => setShowReactions(true)}
      onMouseLeave={() => setShowReactions(false)}
    >
      {showReactions ? (
        <Reactions.IconsContainer>
          <button onClick={hanldeIconClick} name="like">
            <img src={likeIcon} alt="like icon" />
          </button>
          <button onClick={hanldeIconClick} name="love">
            <img src={loveIcon} alt="love icon" />
          </button>
          <button onClick={hanldeIconClick} name="care">
            <img src={careIcon} alt="care icon" />
          </button>
        </Reactions.IconsContainer>
      ) : null}
      <Button appearance="secondary">Reaccionar</Button>
    </Reactions.Element>
  )
}

Reactions.Element = styled.div`
  position: relative;
  display: inline;
  margin-left: 42px;
`

Reactions.IconsContainer = styled.div`
  width: 105px;
  position: absolute;
  background-color: ${colors.white};
  padding: 5px 1rem;
  box-shadow: 0 0 9px ${colors.border};
  border-radius: 50px;
  top: -45px;
  left: -10px;
  button {
    border: none;
    background-color: transparent;
    outline: none;
    width: 35px;
    height: 35px;
    cursor: pointer;

    img {
      width: 100%;
      max-width: 100%;
      transition: all 0.2s;
    }

    &:hover {
      img {
        transform: scale(1.4);
      }
    }
  }
`

Reactions.Counter = ReactionsCounter

export default Reactions
