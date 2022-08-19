import { useState } from 'react';
import { createPost } from '../../api/api';
import { useAppDispatch } from '../../app/hooks';
import { addPost } from '../../features/blog/blogSlice';
import { Button } from '../button/Button.css';
import CustomModal from '../custom-modal/CustomModal';
import { HeaderTitle, HeaderWrapper } from './Header.css';

const Header = () => {
  const dispatch = useAppDispatch();
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);

  const handleShow = () => setShowModal(true);

  const handleAddPost = async (titleValue: string, textValue: string) => {
    if (!titleValue || !textValue) {
      return;
    }
    const data = await createPost(titleValue, textValue);
    if (data) {
      dispatch(addPost(data));
    }
    handleClose();
  };

  return (
    <>
      <HeaderWrapper>
        <HeaderTitle>Simple Blog App</HeaderTitle>
        <Button onClick={handleShow}>Add new Post</Button>
      </HeaderWrapper>
      <CustomModal
        showModal={showModal}
        handleClose={handleClose}
        type="create"
        addPost={handleAddPost}
      />
    </>
  );
};

export default Header;
