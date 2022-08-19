import styled from '@emotion/styled';

export const CommentsTitle = styled.p`
  width: 100%;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
`;

export const CommentText = styled.p`
  width: 100%;
  margin: 20px 0 0 0;
  padding: 20px;
  box-shadow: 0 3px 10px rgb(0, 0, 0, 0.2);
`;

export const NewCommentWrapper = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  margin: 20px 0 20px 0;
`;

export const NewCommentInput = styled.input`
  box-sizing: border-box;
  width: calc(100% - 160px);
  padding: 5px;
  font-size: 16px;
`;
