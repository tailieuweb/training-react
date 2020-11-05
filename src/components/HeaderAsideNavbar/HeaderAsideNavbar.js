import React from "react";

// Components
import Link from "../../common/CustomLink";
// style
import "./HeaderAsideNavbar.scss";

const HeaderAsideNavbar = () => {
  return (
    <div className="HeaderAsideNavbar">
      <Link to="/profile" className="AvatarWrapper">
        <img
          src="https://res.cloudinary.com/tranconghoa/image/upload/v1604335529/flowers/2_fyux2i.jpg"
          alt="avatar"
          className="avatar"
        />
      </Link>
      <h2>Shop Hoa Tươi</h2>
    </div>
  );
};

export default HeaderAsideNavbar;
