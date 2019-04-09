import styled from 'styled-components';
import { Header } from '../../shared/typography';

export const StyledNavigation = styled.nav`
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0 0 4px rgba(51,51,51,.15);
  position: fixed;
  top: 0;
  width: 100%;
  padding: 10px;
`;

export const StyledHeader = styled(Header)`
  margin: 0;
  text-align: left;
`;
