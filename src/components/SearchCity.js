// Form tìm kiếm thời tiết của thành phố được nhập, thông tin sẽ được xử lý tại App.js
import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faSearchLocation } from "@fortawesome/free-solid-svg-icons";
import '../scss/Style.scss'

const SearchCity = ({
  submit,
  value,
  change,
  showResult,
  handleGetLocation,
}) => {
  return (
    <React.Fragment>
      <div className="search-city">
        <form className="search-bar" showresult={showResult} onSubmit={submit}>
          <input className="search-input"
            type="text"
            value={value}
            placeholder="Nhập tên thành phố..."
            onChange={change}
          />
          <span className="search-icon">
            <FontAwesomeIcon icon={faSearch} />
          </span>
          <span className="location-icon" onClick={handleGetLocation}>
            <FontAwesomeIcon icon={faSearchLocation} />
          </span>
        </form>
      </div>
    </React.Fragment>
  );
};

SearchCity.propTypes = {
  submit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
};

export default SearchCity;
