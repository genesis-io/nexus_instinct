import React, {Dispatch, FunctionComponent, SetStateAction} from 'react';
import styled from 'styled-components';

const Label = styled.label`
  color: ${props => props.theme.colors.grey};
`;

const StyledInput = styled.input`
  border: 1px solid ${props => props.theme.colors.lightGrey};
  height: ${props => props.theme.form_elements.height};
  border-radius: ${props => props.theme.form_elements.borderRadius};
  font-size: ${props => props.theme.typography.normalText};
  padding: 5px;
  
  :focus, :visited {
    outline: none;
  }
`;

const FieldContainer = styled.div`
  margin-bottom: ${props => props.theme.form_elements.marginBottom};
  display: flex;
  flex-direction: column;
`;

interface Props {
  value: string;
  label?: string;
  placeholder?: string;
  type?: string;
  onChange: Dispatch<SetStateAction<any>>;
}

export const Input:FunctionComponent<Props> =
  ({
     value = '',
     placeholder = '',
     onChange,
     label = '',
     type = 'text'
  }) => {
  return (
    <FieldContainer>
      <Label>{label}</Label>
      <StyledInput
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </FieldContainer>
  );
};