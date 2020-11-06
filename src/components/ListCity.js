// Danh sách các thành phố lớn ở Việt Nam, sử dụng để lấy thông tin thời tiết cho phép người dùng có thể xem nhanh thông tin thời tiết ở nơi gần nhất

const ListCity = [
  {
    id: 1559969,
    name: "Tỉnh Nghệ An",
    state: "",
    country: "VN",
    coord: {
      lon: 104.833328,
      lat: 19.33333,
    },
  },
  {
    id: 1559970,
    name: "Tỉnh Ninh Bình",
    state: "",
    country: "VN",
    coord: {
      lon: 105.833328,
      lat: 20.25,
    },
  },
  {
    id: 1559971,
    name: "Tỉnh Ninh Thuận",
    state: "",
    country: "VN",
    coord: {
      lon: 108.833328,
      lat: 11.75,
    },
  },
  {
    id: 1559972,
    name: "Tỉnh Sóc Trăng",
    state: "",
    country: "VN",
    coord: {
      lon: 105.833328,
      lat: 9.66667,
    },
  },
  {
    id: 1559975,
    name: "Tỉnh Trà Vinh",
    state: "",
    country: "VN",
    coord: {
      lon: 106.25,
      lat: 9.83333,
    },
  },
  {
    id: 1559976,
    name: "Tỉnh Tuyên Quang",
    state: "",
    country: "VN",
    coord: {
      lon: 105.25,
      lat: 22.116671,
    },
  },
  {
    id: 1559977,
    name: "Tỉnh Vĩnh Long",
    state: "",
    country: "VN",
    coord: {
      lon: 106.0,
      lat: 10.16667,
    },
  },
  {
    id: 1560349,
    name: "Yen Bai",
    state: "",
    country: "VN",
    coord: {
      lon: 104.866669,
      lat: 21.700001,
    },
  },
  {
    id: 1562414,
    name: "Vung Tau",
    state: "",
    country: "VN",
    coord: {
      lon: 107.084259,
      lat: 10.34599,
    },
  },
  {
    id: 1562798,
    name: "Vinh",
    state: "",
    country: "VN",
    coord: {
      lon: 105.666672,
      lat: 18.66667,
    },
  },
  {
    id: 1566083,
    name: "Thanh pho Ho Chi Minh",
    state: "",
    country: "VN",
    coord: {
      lon: 106.666672,
      lat: 10.75,
    },
  },
  {
    id: 1566166,
    name: "Thanh Hoa",
    state: "",
    country: "VN",
    coord: {
      lon: 105.76667,
      lat: 19.799999,
    },
  },
  {
    id: 1566319,
    name: "Thai Nguyen",
    state: "",
    country: "VN",
    coord: {
      lon: 105.84417,
      lat: 21.592779,
    },
  },
  {
    id: 1569805,
    name: "Tỉnh Phú Yên",
    state: "",
    country: "VN",
    coord: {
      lon: 109.166672,
      lat: 13.16667,
    },
  },
  {
    id: 1571058,
    name: "Phan Thiet",
    state: "",
    country: "VN",
    coord: {
      lon: 108.099998,
      lat: 10.93333,
    },
  },
  {
    id: 1572151,
    name: "Nha Trang",
    state: "",
    country: "VN",
    coord: {
      lon: 109.183327,
      lat: 12.25,
    },
  },

  {
    id: 1572594,
    name: "Tỉnh Hòa Bình",
    state: "",
    country: "VN",
    coord: {
      lon: 105.25,
      lat: 20.33333,
    },
  },
  {
    id: 1577882,
    name: "Tỉnh Lâm Ðồng",
    state: "",
    country: "VN",
    coord: {
      lon: 108.333328,
      lat: 11.5,
    },
  },
  {
    id: 1579634,
    name: "Tỉnh Khánh Hòa",
    state: "",
    country: "VN",
    coord: {
      lon: 109.0,
      lat: 12.33333,
    },
  },
  {
    id: 1580240,
    name: "Hue",
    state: "",
    country: "VN",
    coord: {
      lon: 107.599998,
      lat: 16.466669,
    },
  },
  {
    id: 1580578,
    name: "Thành phố Hồ Chí Minh",
    state: "",
    country: "VN",
    coord: {
      lon: 106.666672,
      lat: 10.83333,
    },
  },
  {
    id: 1581047,
    name: "Ha Tinh",
    state: "",
    country: "VN",
    coord: {
      lon: 105.900002,
      lat: 18.33333,
    },
  },
  {
    id: 1581130,
    name: "Ha Noi",
    state: "",
    country: "VN",
    coord: {
      lon: 105.841171,
      lat: 21.0245,
    },
  },
  {
    id: 1581298,
    name: "Haiphong",
    state: "",
    country: "VN",
    coord: {
      lon: 106.68222,
      lat: 20.85611,
    },
  },
  {
    id: 1582720,
    name: "Tỉnh Ðồng Nai",
    state: "",
    country: "VN",
    coord: {
      lon: 107.166672,
      lat: 11.0,
    },
  },

  {
    id: 1584169,
    name: "Tỉnh Ðắc Lắk",
    state: "",
    country: "VN",
    coord: {
      lon: 108.166672,
      lat: 12.83333,
    },
  },
  {
    id: 1584534,
    name: "Tỉnh Bà Rịa-Vũng Tàu",
    state: "",
    country: "VN",
    coord: {
      lon: 107.25,
      lat: 10.58333,
    },
  },
  {
    id: 1586203,
    name: "Can Tho",
    state: "",
    country: "VN",
    coord: {
      lon: 105.783333,
      lat: 10.03333,
    },
  },
  {
    id: 1586443,
    name: "Ca Mau",
    state: "",
    country: "VN",
    coord: {
      lon: 105.150002,
      lat: 9.17694,
    },
  },
  {
    id: 1586896,
    name: "Buon Ma Thuot",
    state: "",
    country: "VN",
    coord: {
      lon: 108.050003,
      lat: 12.66667,
    },
  },
  {
    id: 1591474,
    name: "Thanh pho Bac Lieu",
    state: "",
    country: "VN",
    coord: {
      lon: 105.724442,
      lat: 9.285,
    },
  },
];
export default ListCity;
