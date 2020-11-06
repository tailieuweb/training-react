// Iframe của windymap cung cấp cho người dùng các tính năng rất hữu ích
/*
Một số tính năng như:
- Xem được tổng quan thời tiết của quốc gia
- Dự báo thời tiết trong nhiều ngày
- Tốc độ gió, độ ẩm, ...
 */
import React from "react";
import "../scss/Style.scss";
// Sử dụng kinh độ, vĩ độ được lấy từ thông tin của thành phố hiện tại để hiển thị map của thành phố đó
const WeatherMap = ({ lat, lon }) => {
  const url =
    "https://embed.windy.com/embed2.html?lat=" +
    lat +
    "&lon=" +
    lon +
    "&detailLat=" +
    lat +
    "&detailLon=" +
    lon +
    "&width=650&height=450&zoom=10&level=surface&overlay=wind&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=m%2Fs&metricTemp=%C2%B0C&radarRange=-1";
  return (
    <React.Fragment>
      <div className="windy-map">
        <h2 className="text-center">Windy</h2>
        <div className="border">
          <iframe
            title="map"
            width="100%"
            height="100%"
            src={url}
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </React.Fragment>
  );
};

export default WeatherMap;
