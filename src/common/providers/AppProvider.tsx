import UserContextProvider from '../../modules/user/providers/UserContextProvider';
import RootRouter from '../routers/RootRouter';

const AppProvider = () => {
  return (
    <UserContextProvider>
      <RootRouter />
    </UserContextProvider>
  );
};

export default AppProvider;
