import
  React, {
  FunctionComponent,
  FormHTMLAttributes
} from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  width: 100%;
  height: 100%;;
  margin: auto;
  padding: 32px;
  
  @media ${props => props.theme.devices.tablet} {
    box-shadow: 0 16px 40px rgba(0,0,0,0.12);
  }
`;

interface Props extends FormHTMLAttributes<any> {}

export const Form: FunctionComponent<Props> = ({ children, ...rest}):JSX.Element => {
  return(
    <StyledForm {...rest}>
      { children }
    </StyledForm>
  );
};