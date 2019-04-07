import React from 'react';
import {
  StyledNavigation,
  StyledHeader
} from './styles';
import { UnstyledLink } from '../../shared/typography/unstyled_link';
import { appName } from '../../shared/constants';

const Navigation = () => {
  return(
    <StyledNavigation>
      <UnstyledLink to="/">
        <StyledHeader>{appName}</StyledHeader>
      </UnstyledLink>
    </StyledNavigation>
  )
};

export default Navigation;