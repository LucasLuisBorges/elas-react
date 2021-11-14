import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import { 
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Search on twitter"/>
        <SearchIcon />
      </SearchWrapper>

    <StickyBox>

      <Body>
        <List 
          title="Who to follow"
          elements={[
            <FollowSuggestion 
              name="🍰Sucesso🍰"
              nickname="@SucessorSecreto"
            />,
            <FollowSuggestion 
              name="🌺Honeymoon🌺"
              nickname="@LuaHoney245"
            />,
            <FollowSuggestion 
              name="Ꮓꭼꭱꮻ▹"
              nickname="@Zer0l_"
            />,
          ]}
        />

        <List 
          title="What is happening"
          elements={[
            <News />,
            <News />,
            <News />,
            <News />
          ]}
        />

        <List 
          title="What is happening"
          elements={[
            <News />,
            <News />
          ]}
        />
      </Body>

    </StickyBox>
    </Container>
  );
}

export default SideBar;