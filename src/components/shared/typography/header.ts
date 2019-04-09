import styled from 'styled-components';

export const Header = styled.h1`
  text-align: center;
  font-size: ${props => props.theme.typography.mainHeader};
  color: ${props => props.theme.colors.black};
`;