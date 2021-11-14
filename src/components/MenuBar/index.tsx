import React from 'react';

import Button from '../ButtonTwitter';
import { AuthContext } from "../../contexts/auth";
import { useContext, useState } from "react";

import { 
  Container, 
  Topside, 
  Logo, 
  MenuButton,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ProfileIcon,
  Botside,
  Avatar,
  ProfileData,
  ExitIcon,
  ExporeIcon,
  ListIcon
} from './styles';

const MenuBar: React.FC = () => {
  const { user, signOut } = useContext(AuthContext);
  return (
    <Container>
      <Topside>

        <Logo />

        <MenuButton>
          <HomeIcon />
          <span>Home page</span>
        </MenuButton>

        <MenuButton>
          <ExporeIcon />
          <span>To explore</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>Notifications</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon />
          <span>Messages</span>
        </MenuButton>

        <MenuButton>
          <FavoriteIcon />
          <span>Favorites</span>
        </MenuButton>

        <MenuButton>
          <ListIcon />
          <span>List</span>
        </MenuButton>

        <MenuButton className="active">
          <ProfileIcon />
          <span>Profile</span>
        </MenuButton>

        <Button>
          <span>Tweetar</span>
        </Button>

      </Topside>

      <Botside onClick={signOut}>
        <Avatar />

        <ProfileData>
          <strong>Lucas Borges</strong>
          <span>@lucasluisborges</span>
        </ProfileData>

        <ExitIcon />
      </Botside>
    </Container>
  );
}

export default MenuBar;