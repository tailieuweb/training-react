import styled from 'styled-components';
import device from './Device';

const BigLabel = styled.h2`
  color: #FFFFFF;
  display: block;
  font-weight: 600;
  font-size: 30px;
  text-align: left;
  padding: 5px 0;
  ${({ firstToUpperCase }) =>
    firstToUpperCase &&
    `
  &:first-letter {
    text-transform: uppercase;
  }
  `}
  @media ${device.tablet} {
    font-size: 27px;
  }
  @media ${device.laptop} {
    font-size: 33px;
  } 
  @media ${device.laptopL} {
    font-size: 42px;
  } 
`;

export default BigLabel;
