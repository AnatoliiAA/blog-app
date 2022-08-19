import { useEffect, useState } from 'react';
import { Hearts, Puff, Rings, ThreeDots } from 'react-loader-spinner';
import { addComment } from '../../../api/api';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { CommentParams } from '../../../common/types';
import {
  addPostComment,
  getPostComments,
  selectComments,
  selectCommentsStatus,
} from '../blogSlice';
import { Button } from '../../../components/button/Button.css';
import { CommentsTitle, CommentText, NewCommentInput, NewCommentWrapper } from './Comments.css';

interface CommentsProps {
  postId: number;
}

const Comments = ({ postId }: CommentsProps) => {
  const [inputValue, setInputValue] = useState('');
  const comments = useAppSelector(selectComments);
  const commentsStatus = useAppSelector(selectCommentsStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!(postId in comments)) {
      dispatch(getPostComments(postId));
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  const handleAddComment = (): void => {
    if (!inputValue) {
      return;
    }
    const data = { postId: postId, body: inputValue };
    dispatch(addPostComment(data));
    setInputValue('');
  };

  return (
    <>
      <CommentsTitle>Comments</CommentsTitle>
      {comments[postId] &&
        comments[postId].map((comment: any) => {
          return <CommentText key={comment.id}>{comment.body}</CommentText>;
        })}
      {commentsStatus === 'loading' && <ThreeDots color="#e75a7c" height={60} width={60} />}
      <NewCommentWrapper>
        <NewCommentInput
          placeholder="Type your comment here..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <Button onClick={handleAddComment}>Add new Comment</Button>
      </NewCommentWrapper>
    </>
  );
};

export default Comments;
