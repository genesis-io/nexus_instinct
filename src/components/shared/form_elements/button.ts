import styled from 'styled-components';


// only use this button when doing custom button styling
export const Button = styled.button`
  height: 50px;
  width: 100%;
  border-radius: ${(props) => props.theme.form_elements.borderRadius};
  font-size: ${props => props.theme.typography.inputText }
  border-style: none;
`;

export const PrimaryButton = styled(Button)`
  color: ${props => props.theme.colors.off_white};
  background-color: ${props => props.theme.colors.primary};
`;

export const SecondaryButton = styled(Button)`
  color: ${props => props.theme.colors.off_white};
  background-color: ${props => props.theme.colors.secondary};
`;

export const CancelButton = styled(Button)`
  color: ${props => props.theme.colors.secondary};
  background-color: ${props => props.theme.colors.off_white};
  border-style: 1px solid ${props => props.theme.colors.secondary};
`;

export const DeleteButton = styled(Button)`
  color: ${props => props.theme.colors.off_white};
  background-color: ${props => props.theme.colors.red};
`;
