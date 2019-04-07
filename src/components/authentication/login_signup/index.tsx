import
  React, {
  BaseSyntheticEvent,
  FunctionComponent,
  useState
} from 'react';
import { RouteComponentProps } from 'react-router-dom';
import {
  Form,
  PrimaryButton,
  Input
} from '../../shared/form_elements';
import {
  HLine,
  Container,
  GitHubButton
} from './styles';

import { ReactComponent as GitHubLogo } from '../../../assets/github-logo.svg';
import { Header } from '../../shared/typography';
import { formText } from './constants';

interface Props extends RouteComponentProps {}

const Login_Signup: FunctionComponent<Props> = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const constants = formText[props.match.url];

  const handleSubmit = (event: BaseSyntheticEvent) => {
    event.preventDefault();
  };

  return(
    <Container>
      <Form onSubmit={handleSubmit}>
        <Header>{constants.header}</Header>
        <GitHubButton type="button">
          <GitHubLogo />
          <span>{constants.socialText}</span>
        </GitHubButton>
        <HLine />
        <Input
          value={email}
          label="email"
          onChange={(event: BaseSyntheticEvent) => setEmail(event.target.value)}
        />
        <Input
          type="password"
          value={password}
          label="password"
          onChange={(event: BaseSyntheticEvent) => setPassword(event.target.value)}
        />
        <PrimaryButton type="submit">{constants.buttonText}</PrimaryButton>
      </Form>
    </Container>
  );
};

export default Login_Signup;