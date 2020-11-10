import React from "react";

class Sort extends React.Component {
  render() {
    return (
      <div className="col-md-6">
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false">
            Sắp xếp
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li>
              <a
                role="button"
                href="# ">
                <span className="fa fa-sort-alpha-asc pr-2"></span>Tên A-Z
              </a>
            </li>
            <li>
              <a
                role="button"
                href="# ">                
                <span className="fa fa-sort-alpha-desc pr-2 "></span>Tên Z-A
              </a>
            </li>
            <li role="separator" className="divider" />
            <li>
              <a
                role="button"
                href="# ">                
                Trạng Thái Kích Hoạt
              </a>
            </li>
            <li>
              <a
                role="button"
                href="# ">                
                Trạng Thái Ẩn
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sort;
