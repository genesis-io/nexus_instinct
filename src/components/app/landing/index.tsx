import
  React, {
  FunctionComponent
} from 'react';
import {
  Content,
  OpaqueText,
  ResponsiveSvg,
  InfoContainer
} from './styles';
import {
  Header,
  UnstyledLink
} from '../../shared/typography';
import {
  header,
  description,
  createAccount,
} from './constants';
import theme from '../theme';
import { Routes } from '../constants';
import { SecondaryButton } from '../../shared/form_elements';


interface Props {}

export const Landing: FunctionComponent<Props> = () => {
  return(
   <Content>
     <InfoContainer>
       <Header color={theme.colors.white}>{header}</Header>
       <OpaqueText color={theme.colors.white}>{description}</OpaqueText>
       <UnstyledLink to={Routes.Signup}>
        <SecondaryButton>{createAccount}</SecondaryButton>
       </UnstyledLink>
     </InfoContainer>
     <ResponsiveSvg />
   </Content>
  );
};

export default Landing;