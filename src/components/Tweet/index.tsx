import React from 'react';
import { Retweet } from "../../styles/Icons"

import { 
  Container,
  Retweeted,
  RocketseatIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        you retweeted
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>нσσρ gαмєє</strong>
            <span>@Killugon099</span>
            <Dot />
            <time>October 26th</time>
          </Header>

          <Description>rocket has no reverse</Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              200
            </Status>
            <Status>
              <RetweetIcon />
              188
            </Status>
            <Status>
              <LikeIcon />
              9999
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
}

export default Tweet;