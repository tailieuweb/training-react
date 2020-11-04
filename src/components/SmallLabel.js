import styled from 'styled-components';
import device from './Device';

const SmallLabel = styled.h4`
  color: #FFFFFF;
  display: block;
  font-weight: 600;
  font-size: 15px;
  text-align: left;
  padding: 5px 0;
  &:first-letter {
    text-transform: uppercase;
  }
  @media ${device.tablet} {
    font-size: 14px;
  }
  @media ${device.laptop} {
    font-size: 16px;
  } 
  @media ${device.laptopL} {
    font-size: 20px;
  }
`;

export default SmallLabel;
