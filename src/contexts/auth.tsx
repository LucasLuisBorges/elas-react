import { useHistory } from "react-router";
import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";
import { AxiosResponse } from "axios";

interface IAuthProvider {
  children: ReactNode;
}

export interface IUser {
  id: string;
  full_name: string;
  avatar_url: string;
}

export interface IUserSignIn {
  email: string;
  password: string;
}

export interface IUserSignUp extends IUserSignIn {
  full_name: string;
}

interface IAuthContextData {
  user: IUser | null;
  signOut: () => void;
  signIn: ({ email, password }: IUserSignIn) => Promise<void>;
  signUp: ({ email, password, full_name }: IUserSignUp) => Promise<IUser>;
}

interface IAuthResponse {
  token: string;
  user: {
    id: string;
    avatar_url: string;
    full_name: string;
  };
}

export const AuthContext = createContext({} as IAuthContextData);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("@elas-backend:token");
    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      api.get("/users").then((res) => {
        setUser(res.data);
      });
    }
  }, []);

  const signOut = () => {
    localStorage.removeItem("@elas-backend:token");
    setUser(null);
  };

  const signIn = async ({ email, password }: IUserSignIn) => {
    const res = await api.post<IAuthResponse>("/login", {
      email,
      password,
    });

    const { token, user } = res.data;

    localStorage.setItem("@elas-backend:token", token);

    api.defaults.headers.common.authorization = `Bearer ${token}`;

    setUser(user);
  };

  const signUp = async ({ email, password, full_name }: IUserSignUp) => {
    const res = await api.post<IAuthResponse>("/users", {
      email,
      password,
      full_name,
    });

    const { user } = res.data;

    return user;
  };

  return (
    <AuthContext.Provider value={{ user, signOut, signIn, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};
