import styled from 'styled-components';
import device from './Device';

const Text = styled.span`
  color: #FFFFFF;
  display: block;
  font-size: 12px;
  text-align: left;

  &:first-letter {
    text-transform: uppercase;
  }
  @media ${device.tablet} {
    font-size: ${({ fontSize }) => fontSize || '12px'};
  }
  @media ${device.laptop} {
    font-size: ${({ fontSize }) => fontSize || '14px'};
  } 
  @media ${device.laptopL} {
    font-size: ${({ fontSize }) => fontSize || '16px'};
  }
`;

export default Text;
