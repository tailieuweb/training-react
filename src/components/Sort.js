import React from "react";

class Sort extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sort: {
        sortBy: 'name',
        sortValue: 1
      }
    }
  }

  onClick = async (sortBy, sortValue) => {
    await this.setState({
      sort: {
        sortBy,
        sortValue
      }
    })
    this.props.onSort(this.state.sort)

  };

  render() {
    let { sort } = this.state;
    return (
      <div className="col-md-6">
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Sắp xếp
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {/* truyền tham số nên dùng ntn */}
            <li onClick={() => this.onClick("name", 1)}>
              <a
                role="button"
                href="# "
                className={(sort.sortBy === 'name' && sort.sortValue === 1) ? 'sort_selected' : ''}>
                <span className="fa fa-sort-alpha-asc pr-2"></span>Tên A-Z
              </a>
            </li>
            <li onClick={() => this.onClick("name", -1)}>
              <a
                role="button"
                href="# "
                className={(sort.sortBy === 'name' && sort.sortValue === -1) ? 'sort_selected' : ''}>
                <span className="fa fa-sort-alpha-desc pr-2 "></span>Tên Z-A
              </a>
            </li>
            <li role="separator" className="divider" />
            {/* tại vì sắp xếp theo trang thái nên để status */}
            <li onClick={() => this.onClick("status", 1)}>
              <a
                role="button"
                href="# "
                className={(sort.sortBy === 'status' && sort.sortValue === 1) ? 'sort_selected' : ''}>
                  Trạng Thái Kích Hoạt
              </a>
            </li>
            <li onClick={() => this.onClick("status", -1)}>
              <a
                role="button"
                href="# "
                className={(sort.sortBy === 'status' && sort.sortValue === -1) ? 'sort_selected' : ''}>
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
