import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/auth";
import GlobalStyles from '../../styles/GlobalStyles';
import Layout from "../../components/Layout";

const Dashboard = () => {
  return (
    <>
      <Layout />

      <GlobalStyles />
    </>
  );

};

export { Dashboard };
