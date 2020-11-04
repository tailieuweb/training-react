import React from "react";
import { useHistory } from "react-router-dom";
import "./Logout.scss";
function Logout() {
  const history = useHistory();

  function handleClick() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    history.replace("/login");
  }

  return (
    <div>
      <button
        onClick={handleClick}
        type="button"
        className="btn btn-outline-secondary"
        style={{
          color: `#000`,
        }}
      >
        <i className="fa fa-sign-out" aria-hidden="true"></i>
        Logout
      </button>
    </div>
  );
}

export default Logout;
