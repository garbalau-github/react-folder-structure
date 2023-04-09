import MainLayout from '../../../common/layout/MainLayout';
import Post from '../components/Post';
import usePosts from '../hooks/usePosts';

const MainFeed = () => {
  const posts = usePosts();

  const renderPosts = () => {
    return posts.map((post) => <Post post={post} />);
  };

  return (
    <MainLayout>
      <div>
        <h1>All posts</h1>
        {renderPosts()}
      </div>
    </MainLayout>
  );
};

export default MainFeed;
