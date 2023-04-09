import { PostType } from '../types/PostType';

interface PostProps {
  post: PostType;
}

const Post = ({ post }: PostProps) => {
  return (
    <div key={post.id}>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>Author: {post.user?.username}</p>
    </div>
  );
};

export default Post;
