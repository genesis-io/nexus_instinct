import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const UnstyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  :focus, :visited, :hover {
    text-decoration: none;
    color: inherit;
  }
`;