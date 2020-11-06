import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchCity from "./components/SearchCity";
import Result from "./components/Result";
import NotFound from "./components/NotFound";
import "animate.css/animate.min.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ListCountry from "./components/ListCountry";
import ListCity from "./components/ListCity";
import WeatherMap from "./components/WeatherMap";
import ListKey from "./components/ListKey";
import "./scss/Style.scss";

// Danh sách thành phố lớn của Việt Nam
const list_city = ListCity;

// Danh sách biến
const APIkey = ListKey;

const months = [
  "Tháng 1",
  "Tháng 2",
  "Tháng 3",
  "Tháng 4",
  "Tháng 5",
  "Tháng 6",
  "Tháng 7",
  "Tháng 8",
  "Tháng 9",
  "Tháng 10",
  "Tháng 11",
  "Tháng 12",
];
const days = [
  "Chủ nhật",
  "Thứ hai",
  "Thứ ba",
  "Thứ tư",
  "Thứ 5",
  "Thứ 6",
  "Thứ 7",
];

// Thời gian thực hiện request được sử dụng để lưu thời gian vào sessionStorage
let storageTime = 0;
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      weatherInfo: null,
      error: false,
      arr: [],
      lat: 0,
      lon: 0,
      cityname: "",
      online: false,
    };

    this.handleSearchCity = this.handleSearchCity.bind(this);
    this.handleGetLocation = this.handleGetLocation.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.success = this.success.bind(this);

    /* Kiểm tra giá trị thời gian trong sessionStorage, nếu chưa có sẽ hiện đặt giá trị vào key "time" trong sessionStorage */
    storageTime = sessionStorage.getItem("time");
    if (storageTime === null) {
      storageTime = sessionStorage.setItem("time", new Date().getTime());
    }
  }

  // Hàm này sẽ đặt giá trị cho "value" khi nhận giá trị của input với mỗi thay đổi
  handleInputChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  /* Hàm này sẽ thực hiện trước một lần duy nhất sau khi render
   Sử dụng để làm việc với ajax */
  componentDidMount() {
    //Kiểm tra xem trình duyệt có hỗ trợ localStorage hay không!
    if (typeof Storage !== "undefined") {
      const currentTime = new Date().getTime();
      storageTime = sessionStorage.getItem("time");
      console.log(storageTime);
      if (storageTime === undefined || storageTime === null) {
        sessionStorage.clear();
        storageTime = sessionStorage.getItem("time");
      }
      // Nếu thời gian lớn hơn 10 phút sẽ cập nhật lại thông tin thời tiết
      if (
        localStorage.length === 0 ||
        (storageTime && currentTime - storageTime > 600000)
      ) {
        if (storageTime && currentTime - storageTime > 600000) {
          localStorage.clear();
        }
        sessionStorage.setItem("time", currentTime);
        // Với mỗi thành phố trong danh sách sẽ thực hiện lấy thông tin của thành phố đó
        list_city.forEach((item) => {
          const weather = `https://api.openweathermap.org/data/2.5/weather?q=${item.name}&APPID=${APIkey}&lang=vi`;
          Promise.all([fetch(weather)])
            .then(([res1]) => {
              if (res1.ok) {
                return Promise.all([res1.json()]);
              }
              throw Error(res1.statusText);
            })
            .then(([data1]) => {
              const currentDate = new Date();
              const date = `${
                days[currentDate.getDay()]
              }, Ngày ${currentDate.getDate()}, ${
                months[currentDate.getMonth()]
              }, Năm ${currentDate.getFullYear()}`;
              const sunset = new Date(data1.sys.sunset * 1000)
                .toLocaleTimeString()
                .slice(0, 4);
              const sunrise = new Date(data1.sys.sunrise * 1000)
                .toLocaleTimeString()
                .slice(0, 4);
              const weatherInfo = {
                city: data1.name,
                lat: data1.coord.lat,
                lon: data1.coord.lon,
                country: data1.sys.country,
                date,
                description: data1.weather[0].description,
                main: data1.weather[0].main,
                temp: data1.main.temp,
                highestTemp: data1.main.temp_max,
                lowestTemp: data1.main.temp_min,
                sunrise,
                sunset,
                clouds: data1.clouds.all,
                humidity: data1.main.humidity,
                wind: data1.wind.speed,
              };
              // Mảng arr sẽ chứa thông tin thời tiết của các thành phố
              this.setState((prevState) => ({
                arr: [...prevState.arr, weatherInfo],
                error: false,
              }));
              // Lưu thông tin mỗi thành phố xuống localStorage nhằm giảm tải số lần request API
              localStorage.setItem(data1.name, JSON.stringify(data1));
            })
            .catch((error) => {
              this.setState({
                weatherInfo: null,
              });
            });
        });
        console.log(this.state.arr);
      } else {
        // Thực hiện lấy thông tin thời tiết được lưu tại localStorage
        try {
          for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const data = localStorage.getItem(key);
            const data1 = JSON.parse(data);
            const currentDate = new Date();
            const date = `${
              days[currentDate.getDay()]
            }, Ngày ${currentDate.getDate()}, ${
              months[currentDate.getMonth()]
            }, Năm ${currentDate.getFullYear()}`;
            const sunset = new Date(data1.sys.sunset * 1000)
              .toLocaleTimeString()
              .slice(0, 4);
            const sunrise = new Date(data1.sys.sunrise * 1000)
              .toLocaleTimeString()
              .slice(0, 4);
            const weatherInfo = {
              city: data1.name,
              lat: data1.coord.lat,
              lon: data1.coord.lon,
              country: data1.sys.country,
              date,
              description: data1.weather[0].description,
              main: data1.weather[0].main,
              temp: data1.main.temp,
              highestTemp: data1.main.temp_max,
              lowestTemp: data1.main.temp_min,
              sunrise,
              sunset,
              clouds: data1.clouds.all,
              humidity: data1.main.humidity,
              wind: data1.wind.speed,
            };
            console.log(weatherInfo);
            this.setState((prevState) => ({
              arr: [...prevState.arr, weatherInfo],
              error: false,
            }));
          }
          console.log(this.state.arr);
        } catch (err) {
          localStorage.clear();
        }
      }
    } else {
      // Nếu trình duyệt của người dùng không hỗ trợ localStorage sẽ thông báo đến người dùng
      alert("Trình duyệt của bạn đã quá cũ. Hãy nâng cấp trình duyệt ngay!");
    }
  }

  // Thực hiện lấy thông tin thời tiết với tỉnh thành mà người dùng nhập
  handleSearchCity = (e) => {
    if (e) e.preventDefault();
    const { value } = this.state;
    const weather = `https://api.openweathermap.org/data/2.5/weather?q=${value}&APPID=${APIkey}&lang=vi`;

    Promise.all([fetch(weather)])
      .then(([res1]) => {
        if (res1.ok) {
          return Promise.all([res1.json()]);
        }
        throw Error(res1.statusText);
      })
      .then(([data1]) => {
        const currentDate = new Date();
        const date = `${
          days[currentDate.getDay()]
        }, Ngày ${currentDate.getDate()}, ${
          months[currentDate.getMonth()]
        }, Năm ${currentDate.getFullYear()}`;
        const sunset = new Date(data1.sys.sunset * 1000)
          .toLocaleTimeString()
          .slice(0, 4);
        const sunrise = new Date(data1.sys.sunrise * 1000)
          .toLocaleTimeString()
          .slice(0, 4);
        const weatherInfo = {
          city: data1.name,
          country: data1.sys.country,
          lat: data1.coord.lat,
          lon: data1.coord.lon,
          date,
          description: data1.weather[0].description,
          main: data1.weather[0].main,
          temp: data1.main.temp,
          highestTemp: data1.main.temp_max,
          lowestTemp: data1.main.temp_min,
          sunrise,
          sunset,
          clouds: data1.clouds.all,
          humidity: data1.main.humidity,
          wind: data1.wind.speed,
        };
        const cityExist = this.state.arr.find(
          (element) => element.city === weatherInfo.city
        );
        if (cityExist === undefined) {
          this.setState((prevState) => ({
            arr: [...prevState.arr, weatherInfo],
          }));
        }
        this.setState({
          cityname: value,
          weatherInfo,
          error: false,
        });
      })
      .then(() => {})
      .catch((error) => {
        this.setState({
          error: true,
          weatherInfo: null,
        });
      });
  };

  // Truyền danh sách thông tin thời tiết của thành phố qua ListCity.js
  getLocalData = (city, array) => {
    const data = array.find((dt) => dt.city === city);
    this.setState({
      weatherInfo: data,
      error: false,
    });
  };

  //Xác định vị trí người dùng
  success(position) {
    let latLocation = 0;
    let lonLocation = 0;
    latLocation = position.coords.latitude.toFixed(2) - 0.1;
    lonLocation = position.coords.longitude.toFixed(2) - 0.1;
    this.setState({
      lat: latLocation,
      lon: lonLocation,
    });
  }

  // Lấy thông tin tin thời tiết tại vị trí người dùng
  handleGetLocation() {
    let weatherInfo;
    //Lấy vị trí của người dùng
    let error = () => {
      console.log("Error");
    };
    navigator.geolocation.getCurrentPosition(this.success, error);

    //Get weather datas in your location
    const api = `http://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=${APIkey}`;
    // Bắt đầu thực hiện lấy thông tin thời tiết
    Promise.all([fetch(api)])
      .then(([res1]) => {
        if (res1.ok) {
          return Promise.all([res1.json()]);
        }
        throw Error(res1.statusText);
      })
      .then(([data1]) => {
        // Ngày tháng năm được trả về từ JSON
        const currentDate = new Date();
        const date = `${
          days[currentDate.getDay()]
        }, Ngày ${currentDate.getDate()}, ${
          months[currentDate.getMonth()]
        }, Năm ${currentDate.getFullYear()}`;
        // Chuyển đổi thời gian Mặt Trời mọc
        const sunset = new Date(data1.sys.sunset * 1000)
          .toLocaleTimeString()
          .slice(0, 4);
        // Chuyển đổi thời gian Mặt Trời lặn
        const sunrise = new Date(data1.sys.sunrise * 1000)
          .toLocaleTimeString()
          .slice(0, 4);
        // Lấy các dữ liệu cần thiết được trả về từ JSON
        weatherInfo = {
          city: data1.name,
          country: data1.sys.country,
          lat: data1.coord.lat,
          lon: data1.coord.lon,
          date,
          description: data1.weather[0].description,
          main: data1.weather[0].main,
          temp: data1.main.temp,
          highestTemp: data1.main.temp_max,
          lowestTemp: data1.main.temp_min,
          sunrise,
          sunset,
          clouds: data1.clouds.all,
          humidity: data1.main.humidity,
          wind: data1.wind.speed,
        };
        // Set thông tin thời tiết cho weatherInfo để hiển thị
        this.setState({
          weatherInfo,
          error: false,
        });
      })
      .catch((error) => {
        this.setState({
          weatherInfo: null,
        });
      });
  }

  render() {
    const { value, weatherInfo, error } = this.state;
    return (
      <React.Fragment>
        <div className="weather-main">
          {/* Trang Header */}
          <Header />
          {/* Trang chủ */}
          <div className="container-fluid">
            <SearchCity
              handleGetLocation={this.handleGetLocation}
              value={value}
              showresult={(weatherInfo || error) && true}
              change={this.handleInputChange}
              submit={this.handleSearchCity}
            />
            <div className="row justify-content-center mt-5">
              <div className="col-lg-5 col-md-9 col-xs-10">
                {/* Danh sách thông tin thời tiết của thành phố trong ListCountry */}
                <ListCountry
                  list={this.state.arr}
                  getLocalData={this.getLocalData}
                />
              </div>
              <div className="col-lg-7 col-md-12 order-">
                {/* Nếu như weatherInfo có dữ liệu thì sẽ Gọi component <Result/> */}
                {weatherInfo && <Result weather={weatherInfo} />}
                {/* Nếu như error==true sẽ gọi componenent <NotResult/> */}
                {error && <NotFound error={error} />}
              </div>
            </div>
          </div>
          <div className="container">
            {/* Windy map */}
            {weatherInfo && (
              <div className="windy-map">
                <WeatherMap
                  lat={this.state.weatherInfo.lat}
                  lon={this.state.weatherInfo.lon}
                />
              </div>
            )}
          </div>
          {/* Trang footer */}
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}
