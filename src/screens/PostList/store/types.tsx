import { Post } from "../../Post/store/types";

export type PostList = Post[];

export interface PostListScreenProps {
  posts: PostList;
  totalPages: number;
  scroll: boolean;
  // page: number;
}
