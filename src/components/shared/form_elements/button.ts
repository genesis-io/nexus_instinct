import
  React, {
  FunctionComponent
} from 'react';
import styled from 'styled-components';
import theme from '../../app/theme';
import {
  BackgroundColorProperty,
  Color
} from "csstype";

interface StyledButtonProps {
  color: Color;
  backgroundColor: BackgroundColorProperty;
}

export const Button = styled.button`
  height: 50px;
  width: 100%;
  border-radius: ${(props) => props.theme.form_elements.borderRadius};
  font-size: ${props => props.theme.typography.inputText }
  border-style: none;
  color: ${({ color }: StyledButtonProps) => color};
  background-color: ${({ backgroundColor }: StyledButtonProps) => backgroundColor};
`;

interface Props {
  type: 'primary' | 'cancel';
  text: string;
}

// export const Button:FunctionComponent<Props> = ({ type, text }): JSX.Element => {
//   return(
//     <React.Fragment>
//       {type === 'primary' &&
//       <StyledButton
//         color={theme.colors.off_white}
//         backgroundColor={theme.colors.primary}
//       >
//         { text }
//       </StyledButton>}
//       {type === 'cancel' &&
//       <StyledButton
//         color={theme.colors.primary}
//         backgroundColor={theme.colors.off_white}
//       >
//         { text }
//       </StyledButton>}
//     </React.Fragment>
//   )
// };
