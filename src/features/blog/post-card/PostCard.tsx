import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deletePost, updatePost } from '../../../api/api';
import { useAppDispatch } from '../../../app/hooks';
import { PostParams } from '../../../common/types';
import { Button } from '../../../components/button/Button.css';
import CustomModal from '../../../components/custom-modal/CustomModal';
import { removePost, setPost } from '../blogSlice';
import { ActionsWrapper, PostContent, PostTitle, PostWrapper } from './PostCard.css';

interface PostCardProps extends PostParams {
  isOpened?: boolean;
}

const PostCard = ({ title, body, id, isOpened }: PostCardProps) => {
  const dispatch = useAppDispatch();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => setShowModal(false);

  const handleShow = () => setShowModal(true);

  const handleOpenPost = () => {
    navigate(`/post/${id}`);
  };

  const handleUpdatePost = async (titleValue: string, textValue: string) => {
    if (!titleValue || !textValue) {
      return;
    }
    const data = await updatePost(titleValue, textValue, id);
    if (data) {
      dispatch(setPost(data));
    }
    handleClose();
  };

  const handleDeletePost = async (postId: number) => {
    const data = await deletePost(postId);
    if (data) {
      dispatch(removePost(postId));
    }
    handleClose();
  };

  return (
    <>
      <PostWrapper>
        <PostTitle>{title}</PostTitle>
        <PostContent>{body}</PostContent>
        <ActionsWrapper>
          {!isOpened && <Button onClick={handleOpenPost}>Read More</Button>}
          <Button onClick={handleShow}>Edit Post</Button>
        </ActionsWrapper>
      </PostWrapper>
      <CustomModal
        showModal={showModal}
        handleClose={handleClose}
        postId={Number(id)}
        type="edit"
        postTitle={title}
        postText={body}
        updatePost={handleUpdatePost}
        deletePost={handleDeletePost}
      />
    </>
  );
};

export default PostCard;
