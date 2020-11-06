// Bảng chứa thông tin thời tiết của một số các thành phố, tỉnh thành lớn trên cả nước, đồng thời cho phép sắp xếp thời tiết theo các tiêu chí được định nghĩa sẵn
import React from "react";
import "../fontawesome/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import '../scss/Style.scss'

const keys = {
  city: "city",
  temp: "temp",
  hum: "humidity",
};

class ListCountry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.list,
      cityUp: false,
      tempUp: false,
      humUp: false,
    };
    this.sortList = this.sortList.bind(this);
  }
  // Hàm sắp xếp thông tin theo thể loại (tên, độ ẩm, nhiệt độ)
  sortList = (arr, key, up) => {
    arr.sort((a, b) => {
      if (a[key] > b[key]) {
        return -1;
      }
      if (a[key] < b[key]) {
        return 1;
      }
      return 0;
    });
    // Kiểm tra nếu như hàm đang giảm thì sẽ đảo ngược mảng để mảng chuyển về sắp xếp tăng dần
    if (!up) {
      arr.reverse();
    }
    this.setState({ list: arr });
  };
  render() {
    return (
      <React.Fragment>
        <div className="list-country">
          <table className="table table-borderless">
            <thead>
              <tr>
                <th
                  // Mỗi khi click vào đầu bảng sẽ sắp xếp thông tin theo kiểu được định nghĩa
                  onClick={() => {
                    this.setState(
                      {
                        cityUp: !this.state.cityUp,
                        tempUp: false,
                        humUp: false,
                      },
                      () => {
                        this.sortList(
                          this.props.list,
                          keys.city,
                          this.state.cityUp
                        );
                      }
                    );
                  }}
                >
                  Thành phố
                  <span className="ico">
                    <i className="fas fa-city"></i>
                  </span>
                </th>
                <th
                  onClick={() => {
                    this.setState(
                      {
                        cityUp: false,
                        tempUp: !this.state.tempUp,
                        humUp: false,
                      },
                      () => {
                        this.sortList(
                          this.props.list,
                          keys.temp,
                          this.state.tempUp
                        );
                      }
                    );
                  }}
                >
                  Nhiệt độ
                  <span className="ico">
                    <i className="fas fa-temperature-low"></i>
                  </span>
                </th>
                <th
                  onClick={() => {
                    this.setState(
                      {
                        cityUp: false,
                        tempUp: false,
                        humUp: !this.state.humUp,
                      },
                      () => {
                        this.sortList(
                          this.props.list,
                          keys.hum,
                          this.state.humUp
                        );
                      }
                    );
                  }}
                >
                  Độ ẩm
                  <span className="ico">
                    <i className="fas fa-tint"></i>
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Load giá trị trong mảng được truyền từ App.js */}
              {this.props.list.map((item, index) => (
                <tr
                  key={index}
                  onClick={() => {
                    this.props.getLocalData(item.city, this.props.list);
                  }}
                >
                  <td>{item.city}</td>
                  <td className="temp">
                    {/* Chuyển đổi nhiệt độ qua độ C */}
                    {Math.floor(item.temp - 273.15)}&#176;C
                  </td>
                  <td className="hum">{item.humidity}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default ListCountry;
