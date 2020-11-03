import { v4 as uuidv4 } from 'uuid';
import T_Shirt_0101 from '../assets/img/product/t-shirts/0101.jpg';
const Mockdata = [
  {
    id: uuidv4(),
    name: "Làm Báo cao CMS deadline 30/10",
    deadline: " 30/10",
    srcss: T_Shirt_0101,
    level: 2 // high
  },
  {
    id: uuidv4(),
    name: "Ngủ",
    deadline: "30/10",
    srcss: T_Shirt_0101,
    level: 0 // low
  },
  {
    id: uuidv4(),
    name: "Làm Báo cao LTW1 deadline 30/10",
    deadline: "4/11",
    srcss: T_Shirt_0101,
    level: 1 // medium
  },
  {
    id: uuidv4(),
    name: "Thiết kế module CMS",
    deadline: "30/10",
    srcss: T_Shirt_0101,
    level: 0 // low
  },
  {
    id: uuidv4(),
    name: "Làm task",
    deadline: "0101",
    srcss: T_Shirt_0101,
    level: 2 // high
  },
  {
    id: uuidv4(),
    name: "muốn tổ chức giải đua xe tại Việt Nam vào năm 2020",
    deadline: "sdsds",
    srcss: T_Shirt_0101,
    level: 1 // medium

  },
  {
    id: uuidv4(),
    name: "muốn tổ chức giải đua xe tại Việt Nam vào năm 2020",
    deadline: "đsds",
    srcss: T_Shirt_0101,
    level: 1 // medium

  }
];

export default Mockdata;