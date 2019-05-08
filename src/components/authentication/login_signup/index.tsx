import
  React, {
  BaseSyntheticEvent,
  FunctionComponent,
  useContext,
} from 'react';
import { observer } from 'mobx-react-lite';
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
import { Context } from'../../app';
import { useInput } from '../../shared/utils/use_input';

interface Props extends RouteComponentProps {}

const Login_Signup: FunctionComponent<Props> = observer( (props) => {
  const { userStore } = useContext(Context);
  const {
    value: password,
    onChange: handlePasswordChange
  } = useInput('');
  const {
    value: email,
    onChange: handleEmailChange
  } = useInput('');
  const constants = formText[props.match.url];

  const handleSocialLogin = async(event: BaseSyntheticEvent) => {
    try {
      const response = await userStore.loginSocial({ email, password });
    } catch(e) {
      // still need to implement error handling
    }
  };

  const handleSubmit = async(event: BaseSyntheticEvent) => {
    event.preventDefault();
    try {
      const response = await userStore.loginUser({ email, password });
    } catch(e) {
      // still need to implement error handling
    }
  };

  return(
    <Container>
      <Form onSubmit={handleSubmit}>
        <Header>{constants.header}</Header>
        <GitHubButton onClick={handleSocialLogin} type="button">
          <GitHubLogo />
          <span>{constants.socialText}</span>
        </GitHubButton>
        <HLine />
        <Input
          value={email}
          label="email"
          onChange={handleEmailChange}
        />
        <Input
          type="password"
          value={password}
          label="password"
          onChange={handlePasswordChange}
        />
        <PrimaryButton type="submit">{constants.buttonText}</PrimaryButton>
      </Form>
    </Container>
  );
});

export default Login_Signup;