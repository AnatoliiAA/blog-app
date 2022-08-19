import styled from '@emotion/styled';

export const PostWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  min-height: 300px;
  margin: 20px 0;
  padding: 0 20px;
  background-color: #f2f5ea;
  box-shadow: 0 3px 10px rgb(0, 0, 0, 0.2);
`;

export const PostTitle = styled.p`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin: 10px 0;
`;

export const PostContent = styled.p`
  font-size: 16px;
`;

export const ActionsWrapper = styled.div`
  box-sizing: border-box;
  position: absolute;
  bottom: 20px;
  display: flex;
  flex-direction: row-reverse;
  gap: 20px;
  width: calc(100% - 40px);
`;
