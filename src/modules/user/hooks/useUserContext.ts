import { useContext } from 'react';
import { UserContext } from '../providers/UserContextProvider';

const useUserContext = () => {
  return useContext(UserContext);
};

export default useUserContext;
