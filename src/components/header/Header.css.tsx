import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1400px;
  height: 100px;
  margin: 0 auto;
`;

export const CustomLink = styled(Link)`
  box-sizing: border-box;
  padding: 10px;
  text-decoration: none;
  color: black;
  background: linear-gradient(to top, #e75a7c 50%, transparent 50%);
  background-size: 100% 200%;
  transition: all 0.3s ease;
  &:hover {
    background-position: 100% -5px;
    color: black;
  }
`;

export const HeaderTitle = styled.h1`
  font-size: 32px;
`;
