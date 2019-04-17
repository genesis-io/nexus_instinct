import styled from 'styled-components';

export const Header = styled.h1`
  text-align: center;
  font-size: ${props => props.theme.typography.mainHeader};
  color: ${props => props.color || props.theme.colors.black};
  
  @media ${props => props.theme.devices.laptop} {
    font-size: 45px;
  }
`;