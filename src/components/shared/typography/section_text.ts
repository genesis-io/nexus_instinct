import styled from 'styled-components';

export const SectionText = styled.p`
  text-align: center;
  font-size: ${props => props.theme.typography.sectionText};
  color: ${props => props.color || props.theme.colors.black};
  
  @media ${props => props.theme.devices.laptop} {
    font-size: 21px;
  }
`;