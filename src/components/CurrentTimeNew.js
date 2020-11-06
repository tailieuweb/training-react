//Hiển thị thời gian hiện tại
import React from "react";

const CurrentTimeNew = () => {
  //Sử dụng hook tạo biến chứa giá trị thời gian
  const [time, setTime] = React.useState(new Date());
  const [day, setDay] = React.useState(new Date().getDate());
  const [month, setMonth] = React.useState(new Date().getMonth() + 1);
  const [year, setYear] = React.useState(new Date().getFullYear());
  // Sau thời gian là 1s thì sẽ tự động cập nhật giá trị mới vào các biến
  setInterval(() => {
    setTime(new Date());
    setDay(new Date().getDate());
    setMonth(new Date().getMonth() + 1);
    setYear(new Date().getFullYear());
  }, 1000);
  return (
    <React.Fragment>
      <div className="current-time">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-center">
              {/* Thời gian hiện tại */}
              <p className="time">{time.toLocaleTimeString()}</p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-center">
              <p className="date">
                {/* Ngày tháng năm */}
                Ngày {day}, tháng {month}, năm {year}
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CurrentTimeNew;
