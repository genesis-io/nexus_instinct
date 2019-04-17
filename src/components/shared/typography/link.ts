import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const UnstyledLink = styled(Link)`
  padding: 8px 15px;
  text-decoration: none;
  color: inherit;
  :focus, :visited, :hover {
    text-decoration: none;
    color: inherit;
  }
`;

export const PrimaryLink = styled(UnstyledLink)`
  border-radius: ${props => props.theme.typography.borderRadius};
  transition: background-color .3s ease;
  :hover {
    color: ${props => props.theme.colors.primary};
    background-color: ${props => props.theme.colors.secondary};
  }
`;

export const SecondaryLink = styled(UnstyledLink)`
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.typography.borderRadius};
  transition: background-color .3s ease;
  :hover {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.secondary};
  }
`;
