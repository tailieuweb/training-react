import device from "./Device";
import styled from "styled-components";
const GrayLabel = styled.div`
    padding:20px 0px;
    background-color:rgba(0,0,0,.7);
    color: #65a69a;
    display: block;
    font-weight: 600;
    font-size: 30px;
    text-align: left;
    ${({ firstToUpperCase }) =>
        firstToUpperCase &&
        `
    &:first-letter {
    text-transform: uppercase;
    }
    `}
    @media ${device.tablet} {
    font-size: 37px;
    }
    @media ${device.laptop} {
    font-size: 43px;
    } 
    @media ${device.laptopL} {
    font-size: 52px;
    } 
`;

export default GrayLabel;
