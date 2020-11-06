// Hiệu ứng khi hiển thị thông tin chi tiết thời tiết
import { keyframes } from "styled-components";

const ResultFadeIn = keyframes`
  to {
    opacity: 1;
        visibility: visible;
        top: 0;
  }
`;

export default ResultFadeIn;
