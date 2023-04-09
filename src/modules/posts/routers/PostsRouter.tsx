import { Routes, Route } from 'react-router-dom';
import MainFeed from '../pages/MainFeed';
import NotFound from '../../../common/pages/NotFound';

const PostsRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<MainFeed />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default PostsRouter;
