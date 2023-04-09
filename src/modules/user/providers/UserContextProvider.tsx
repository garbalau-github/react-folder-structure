import { ReactNode, createContext, useState } from 'react';
import { UserType } from '../types/UserType';

export const UserContext = createContext<UserType | null>(null);

type UserContextProviderProps = {
  children: ReactNode;
};

const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<UserType | null>(null);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
