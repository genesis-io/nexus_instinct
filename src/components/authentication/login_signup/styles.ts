import styled from 'styled-components';
import { Button } from '../../shared/form_elements';

export const Container = styled.div`
  margin-top: 60px;
  width: 100%;
  @media ${props => props.theme.devices.tablet} {
    width: 440px;
    margin: auto;
    padding-bottom: 100px;
  }
`;

export const GitHubButton = styled(Button)`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.off_white};
  background-color: ${props => props.theme.colors.black};
  
  span {
    margin: auto;
  }
  
  svg {
    height: 24px;
    width: 24px;
    fill: ${props => props.theme.colors.off_white};
  }
`;

export const HLine = styled.hr`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 32px 0;
  overflow: visible;
  height: 0
  border: 0;
  border-bottom: 1px solid ${props => props.theme.colors.lightGrey}
  
  &:after {
    content: "or";
    padding: 0 8px;
    background-color: #fff;
  }
`;