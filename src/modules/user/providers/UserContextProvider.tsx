import { ReactNode, createContext, useState } from 'react';
import { UserType } from '../types/UserType';

type UserContextProviderProps = {
  children: ReactNode;
};

type UserContextType = {
  user: UserType | null;
  logInWithUsername: (username: string) => void;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<UserType | null>(null);

  const logInWithUsername = async (username: string) => {
    const usersResponse = await fetch('/users.json');
    const users = (await usersResponse.json()) as UserType[];

    const matchingUser = users.find((user: UserType) => {
      console.log(user);
      return user.username === username;
    });

    console.log('matchingUser', matchingUser);

    if (matchingUser?.username) {
      console.log('here');
      setUser(user);
    }
  };

  return (
    <UserContext.Provider value={{ user, logInWithUsername }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
