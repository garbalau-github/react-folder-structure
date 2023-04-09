import { Routes, Route } from 'react-router-dom';
import NotFound from '../../../common/pages/NotFound';
import Profile from '../pages/Profile';

const UserRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Profile />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default UserRouter;
