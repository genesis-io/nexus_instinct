import
  React, {
  FunctionComponent
} from 'react';
import {
  Container,
  Content,
  OpaqueText,
  ResponsiveSvg
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

const Landing: FunctionComponent<Props> = () => {

  return(
   <Container>
     <Content>
       <Header color={theme.colors.white}>{header}</Header>
       <OpaqueText color={theme.colors.white}>{description}</OpaqueText>
       <UnstyledLink to={Routes.Signup}>
        <SecondaryButton>{createAccount}</SecondaryButton>
       </UnstyledLink>
       <ResponsiveSvg />
     </Content>
   </Container>
  );
};

export default Landing;