import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/auth";
import {
  Container,
} from "./styles";

const Dashboard = () => {
  const { user, signOut } = useContext(AuthContext);

  return <Container onClick={signOut}>sair</Container>;
};

export { Dashboard };
