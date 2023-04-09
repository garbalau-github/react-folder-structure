import MainLayout from '../../../common/layout/MainLayout';
import LogIn from '../components/LogIn';
import useUserContext from '../hooks/useUserContext';

const Profile = () => {
  const userContext = useUserContext();
  console.log(userContext);
  return (
    <MainLayout>
      <div>
        {userContext?.user?.username ? (
          <h1>Hello {userContext.user?.username}</h1>
        ) : (
          <LogIn />
        )}
      </div>
    </MainLayout>
  );
};

export default Profile;
