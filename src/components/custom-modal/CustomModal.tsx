import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from '../button/Button.css';
import Input from '../input/Input';
import TextArea from '../text-area/TextArea';

interface CustomModalProps {
  showModal: boolean;
  handleClose: () => void;
  postId?: number;
  type: 'create' | 'edit';
  postTitle?: string;
  postText?: string;
  updatePost?: (titleValue: string, textValue: string, postId: number) => {};
  addPost?: (titleValue: string, textValue: string) => {};
  deletePost?: (postId: number) => {};
}

const CustomModal = ({
  showModal,
  handleClose,
  type,
  postTitle,
  postText,
  postId,
  updatePost,
  addPost,
  deletePost,
}: CustomModalProps) => {
  const [titleValue, setTitleValue] = useState(postTitle || '');
  const [textValue, setTextValue] = useState(postText || '');

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTitleValue(e.target.value);
  };

  const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setTextValue(e.target.value);
  };

  return (
    <>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{type === 'edit' ? 'Edit Post' : 'Create Post'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Input
            type="text"
            id="title"
            labelText="Post Title"
            placeholder="Post Title"
            value={titleValue}
            onChange={handleChangeTitle}
          />
          <TextArea
            id="text"
            labelText="Post Text"
            value={textValue}
            onChange={handleChangeText}
            placeholder="Write your post here"
          />
        </Modal.Body>
        <Modal.Footer>
          {updatePost && postId && (
            <Button onClick={() => updatePost(titleValue, textValue, postId)}>Save Changes</Button>
          )}
          {deletePost && postId && <Button onClick={() => deletePost(postId)}>Delete Post</Button>}
          {addPost && type === 'create' && (
            <Button onClick={() => addPost(titleValue, textValue)}>Create Post</Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CustomModal;
