import
  React, {
  BaseSyntheticEvent,
  FunctionComponent,
  useContext,
  useState
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

interface Props extends RouteComponentProps {}

const Login_Signup: FunctionComponent<Props> = observer( (props) => {
  const { userStore } = useContext(Context);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const constants = formText[props.match.url];

  const handleSocialLogin = async(event: BaseSyntheticEvent) => {
    try {
      const response = await userStore.loginSocial();
    } catch(e) {
      // still need to implement error handling
    }
  };

  const handleSubmit = async(event: BaseSyntheticEvent) => {
    event.preventDefault();
    try {
      const response = await userStore.loginUser();
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
});

export default Login_Signup;