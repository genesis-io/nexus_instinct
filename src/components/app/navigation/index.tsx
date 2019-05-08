import
  React, {
  FunctionComponent
} from 'react';
import {
  RouteComponentProps,
  withRouter
} from 'react-router';
import {
  StyledNavigation,
  StyledHeader,
  SignIn,
  NavRight
} from './styles';
import {
  UnstyledLink,
  PrimaryLink
} from '../../shared/typography';
import theme from '../theme';
import {
  Routes,
  signIn,
  title
} from '../constants';
import {
  BackgroundColorProperty,
  Color
} from 'csstype';
import { TestIds } from './constants';

interface Props extends RouteComponentProps {}

export const Navigation: FunctionComponent<Props> = (props: Props) => {
  const isHomeUrl = props.location.pathname === Routes.Home;
  const getColor = (): Color => (isHomeUrl && theme.colors.white) || theme.colors.black;
  const getBackgroundColor = (): BackgroundColorProperty =>
    (isHomeUrl && theme.colors.transparent) || theme.colors.white;

  return(
    <StyledNavigation
      data-testid={TestIds.Navigation}
      backgroundColor={getBackgroundColor()}
    >
      <UnstyledLink to={Routes.Home}>
        <StyledHeader color={getColor()}>{title}</StyledHeader>
      </UnstyledLink>
      {isHomeUrl && (
        <NavRight data-testid={TestIds.SignIn}>
          <PrimaryLink to={Routes.Login}>
            <SignIn>{signIn}</SignIn>
          </PrimaryLink>
        </NavRight>
      )}
    </StyledNavigation>
  )
};

export default withRouter(Navigation);