import React from 'react';
import ReactDOM from 'react-dom';
import PostNewPanel from './components/PostNewPanel';
import PostMorePanel from './components/PostMorePanel';

import './public/css/dist/style.css';
import image1 from './public/images/hinh1.jpg';
import image2 from './public/images/hinh2.jpg';

var dataPostNew = [
  {
    id: 1,
    date_post: {
      day: 25,
      month: 11,
      year: 2020,
    },
    title: 'Sinh viên FIT-TDC đạt nhiều giải cao trong Hội thi HSSV Giỏi nghề 2020',
    description: 'Sáng ngày 18 tháng 10 năm 2020 , đã diễn ra buổi " Lễ tổng kết và trao giải hội thi HSSV Giỏi Nghề Lần 12 Năm 2020 "[...]',
    image: image1
  },
  {
    id: 2,
    date_post: {
      day: 20,
      month: 11,
      year: 2020,
    },
    title: 'Đỗ Xuân Trường - SV FIT-TDC đạt huy chương bạc tại cuộc thi kỹ năng nghề quốc gia 2020',
    description: 'Ngày 10/10/2020 đã diễn ra lễ Bế mạc Hội đồng thi số 1 Kỹ năng nghề quốc gia 2020: Lan tỏa sức mạnh của kỹ năng lao động[...]',
    image: image2
  },
  {
    id: 3,
    date_post: {
      day: 8,
      month: 10,
      year: 2020,
    },
    title: 'Lễ chào đón Tân Sinh viên FIT-TDC khóa 2020',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit non mi porta gravida nib h ac facilisis',
    image: image1
  },
  {
    id: 4,
    date_post: {
      day: 15,
      month: 9,
      year: 2020,
    },
    title: 'FIT-TDC tham gia vòng thi thực hành ngành Thiết Kế Website Hội thi HSSV Giỏi Nghề 2020',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit non mi porta gravida nib h ac facilisis',
    image: image2
  },
  {
    id: 5,
    date_post: {
      day: 30,
      month: 6,
      year: 2020,
    },
    title: 'FIT-TDC tổ chức hội đồng nghiệm thu đề tài nghiên cứu khoa học của SV 2020',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit non mi porta gravida nib h ac facilisis',
    image: image1
  }
];

ReactDOM.render(
  <React.StrictMode>
    <PostNewPanel dataPostNew={dataPostNew} />
  </React.StrictMode>,
  document.getElementById('topnews-body')
);

ReactDOM.render(
  <React.StrictMode>
    <PostMorePanel dataPostNew={dataPostNew} />
  </React.StrictMode>,
  document.getElementById('headlines')
);