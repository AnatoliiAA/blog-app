import styled from '@emotion/styled';

export const Button = styled.button`
  box-sizing: border-box;
  width: 140px;
  height: 40px;
  background-color: #f2f5ea;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  line-height: 14px;
  background: linear-gradient(to left, #e75a7c 50%, transparent 50%);
  background-size: 200%;
  color: #e75a7c;
  border: 2px solid #e75a7c;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-position: 100%;
    color: white;
  }
`;
