import { UserType } from '../../users/types/UserType';

export type PostType = {
  id: number;
  title: string;
  content: string;
  userId: number;
  user?: UserType;
};
