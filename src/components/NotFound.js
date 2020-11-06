// Khi kết quả tìm kiếm, hoặc có lỗi xảy ra thì component sẽ được gọi tại App.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSadTear} from '@fortawesome/free-solid-svg-icons';
import '../scss/Style.scss'
const NotFound = () => {
  return (
    <div className="no-result">
      <span className="no-result-icon">
        <FontAwesomeIcon icon={faSadTear} />
      </span>
      <span class="no-result-text">Có lỗi xảy ra!</span>
    </div>
  );
};

export default NotFound;
