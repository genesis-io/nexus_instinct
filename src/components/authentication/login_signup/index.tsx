import
  React, {
  BaseSyntheticEvent,
  FunctionComponent,
  useState
} from 'react';

import { RouteComponentProps } from 'react-router-dom';

import { Form } from './styles';
import { Button } from '../../shared/form_elements/button';
import { Input } from '../../shared/form_elements/input';
import {  Header } from '../../shared/typography/header';
import { formText } from './constants';

interface Props extends RouteComponentProps {}

const Login_Signup: FunctionComponent<Props> = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const constants: any = formText[props.match.url];
  console.log(props);

  return(
    <Form>
      <Header>{constants.header}</Header>
      <Input
        value={email}
        label="email"
        onChange={(event: BaseSyntheticEvent) => setEmail(event.target.value)}
      />
      <Input
        value={password}
        label="password"
        onChange={(event: BaseSyntheticEvent) => setPassword(event.target.value)}/>
      <Button text={constants.buttonText} type="primary" />
    </Form>
  );
};

export default Login_Signup;