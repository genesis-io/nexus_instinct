import styled from 'styled-components';
import {
  Header,
  SectionText,
} from '../../shared/typography';
import { ReactComponent as MacBookSvg } from '../../../assets/macbook.svg';
import { SecondaryButton } from '../../shared/form_elements';

export const Content = styled.div`
  background-color: ${props => props.theme.colors.primary}
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  z-index: 1;
  color: ${props => props.theme.colors.white};
  padding-top: 100px;
  
  ${Header} {
    margin: 0;
  }
  
  ${SecondaryButton} {
    margin-top: 10px;
    padding: 8px 65px;
  }
`;

export const OpaqueText = styled(SectionText)`
  opacity: .5;
  max-width: 600px;
  margin: 10px auto;
  letter-spacing: 1px;
  line-height: 1.9em;
  letter-spacing: .03em;
`;

export const ResponsiveSvg = styled(MacBookSvg)`
  width: 350px;
  max-height: 200px;
  
  @media ${props => props.theme.devices.tablet} {
    width: 425px;
    max-height: 350px;
  }
  
  @media ${props => props.theme.devices.laptop} {
    width: 525px;
    max-height: 450px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  
  ${SecondaryButton} {
    width: auto;
  }
`;