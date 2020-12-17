import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import colors from '../../config/colors'

export type userType = {
  firstName: string
  lastName: string
  picture: string
}

export type publicationType = {
  user: userType
  content: string
  created: Date
}

export interface PublicationProps {
  publication: publicationType
}

const Publication = ({publication}: PublicationProps) => (
  <Publication.Element>
    <Publication.Avatar>
      <img
        alt={`${publication.user.firstName}'s avatar`}
        src={publication.user.picture}
      />
    </Publication.Avatar>
    <Publication.Description>
      <div>
        <Publication.UserName>{`${publication.user.firstName} ${publication.user.lastName}`}</Publication.UserName>
        <Publication.Created>
          {moment(publication.created).fromNow()}
        </Publication.Created>
      </div>
      <Publication.Content>{publication.content}</Publication.Content>
    </Publication.Description>
  </Publication.Element>
)

Publication.Element = styled.div`
  display: flex;
  align-items: flex-start;
`

Publication.Description = styled.div`
  width: 100%;
  padding: 0 1rem;
`

Publication.UserName = styled.span`
  font-weight: bold;
  color: ${colors.green};
`

Publication.Created = styled.span`
  color: ${colors.gray};
  font-size: 13px;
  display: block;
`

Publication.Content = styled.p`
  margin: 10px 0;
  font-size: 15px;
  line-height: 1.5;
`

Publication.Avatar = styled.picture`
  min-width: 50px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    max-width: 100%;
  }
`

export default Publication