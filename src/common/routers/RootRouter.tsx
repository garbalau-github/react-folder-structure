import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PostsRouter from '../../modules/posts/routers/PostsRouter';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';

const RootRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/posts/*' element={<PostsRouter />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootRouter;
