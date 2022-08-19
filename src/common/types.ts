export interface PostParams {
  title: string;
  body: string;
  id: number;
}

export interface CommentParams {
  body: string;
  id: number;
  postId: number;
}
