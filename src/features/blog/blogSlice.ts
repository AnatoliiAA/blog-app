import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addComment, getComments, getPosts } from '../../api/api';
import { RootState } from '../../app/store';
import { CommentParams, PostParams } from '../../common/types';

type StatusType = 'idle' | 'loading' | 'failed';

export interface BlogState {
  status: StatusType;
  commentsStatus: StatusType;
  posts: Array<PostParams>;
  comments: { [postId: number]: Array<CommentParams> };
}

const initialState: BlogState = {
  status: 'idle',
  commentsStatus: 'idle',
  posts: [],
  comments: {},
};

export const getAllPosts = createAsyncThunk('blog/getPosts', async () => {
  const data = await getPosts();
  const allPosts = data.filter((post: any) => post.title);
  return allPosts;
});

export const getPostComments = createAsyncThunk('blog/getComments', async (postId: number) => {
  const data = await getComments(postId);
  const allComments = data.comments;
  return { [postId]: allComments };
});

export const addPostComment = createAsyncThunk(
  'blog/addComment',
  async (data: { postId: number; body: string }) => {
    const { postId, body } = data;
    const response = await addComment(postId, body);
    return [postId, response];
  }
);

export const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    setStatus: (state, action: PayloadAction<StatusType>) => {
      state.status = action.payload;
    },
    addPost: (state, action: PayloadAction<PostParams>) => {
      state.posts.push(action.payload);
    },
    setPost: (state, action: PayloadAction<PostParams>) => {
      const element = state.posts.filter((post) => post.id === action.payload.id)[0];
      const index = state.posts.indexOf(element);
      state.posts[index] = action.payload;
    },
    removePost: (state, action: PayloadAction<number>) => {
      const element = state.posts.filter((post) => post.id === action.payload)[0];
      const index = state.posts.indexOf(element);
      state.posts.splice(index, 1);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAllPosts.fulfilled, (state, action) => {
        state.status = 'idle';
        state.posts = [...action.payload];
      })
      .addCase(getAllPosts.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(getPostComments.pending, (state) => {
        state.commentsStatus = 'loading';
      })
      .addCase(getPostComments.fulfilled, (state, action) => {
        state.commentsStatus = 'idle';
        state.comments = { ...action.payload };
      })
      .addCase(getPostComments.rejected, (state) => {
        state.commentsStatus = 'failed';
      })
      .addCase(addPostComment.pending, (state) => {
        state.commentsStatus = 'loading';
      })
      .addCase(addPostComment.fulfilled, (state, action) => {
        const [postId, response] = action.payload;
        state.commentsStatus = 'idle';
        state.comments[postId].push(response);
      })
      .addCase(addPostComment.rejected, (state) => {
        state.commentsStatus = 'failed';
      });
  },
});

export const { setStatus, addPost, setPost, removePost } = blogSlice.actions;
export const selectPosts = (state: RootState) => state.blog.posts;
export const selectComments = (state: RootState) => state.blog.comments;
export const selectStatus = (state: RootState) => state.blog.status;
export const selectCommentsStatus = (state: RootState) => state.blog.commentsStatus;

export default blogSlice.reducer;
