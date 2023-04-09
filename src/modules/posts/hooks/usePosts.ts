import { useState, useEffect } from 'react';
import { PostType } from '../types/PostType';
import { UserType } from '../../user/types/UserType';

const usePosts = () => {
  const [posts, setPosts] = useState<PostType[]>([]);

  const fetchPosts = async () => {
    const postsResponse = await fetch('/posts.json');
    const posts = (await postsResponse.json()) as PostType[];

    const usersResponse = await fetch('/users.json');
    const users = (await usersResponse.json()) as UserType[];

    posts.forEach((post: PostType) => {
      const matchingUser = users.find((user) => user.id === post.userId);
      if (matchingUser) {
        post.user = matchingUser;
      }
    });

    setPosts(posts);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return posts;
};

export default usePosts;
