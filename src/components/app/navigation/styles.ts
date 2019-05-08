import styled from 'styled-components';
import { Header } from '../../shared/typography';
import {
  BackgroundColorProperty,
  Color
} from 'csstype';

interface NavigationProps {
  backgroundColor: BackgroundColorProperty;
}

export const StyledNavigation = styled.nav`
  background-color: ${({ backgroundColor }: NavigationProps) => backgroundColor};
  display: flex;
  align-items: center;
  box-shadow: ${({ backgroundColor }) => backgroundColor === '#fff' && '0 0 4px rgba(51,51,51,.15)' || 'none'};
  border-bottom: ${({ backgroundColor }) => backgroundColor !== '#fff' && 
  '1px solid rgb(176, 198, 225, 0.3)' || 'none'};
  position: fixed;
  top: 0;
  width: 100%;
  padding: 10px;
  z-index: 2;
  justify-content: space-between;
`;

StyledNavigation.displayName = 'StyledNavigation';

interface HeaderProps {
  color: Color;
}

export const StyledHeader = styled(Header)`
  margin: 0;
  text-align: left;
  color: ${({ color }: HeaderProps) => color}
`;

export const SignIn = styled.span`
  font-size: ${props => props.theme.typography.inputText}
  color: ${props => props.theme.colors.white};
`;

export const NavRight = styled.div`
`;
