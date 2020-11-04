import React from 'react';

import SwiperCore, { Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';



import 'swiper/swiper.scss';








SwiperCore.use([Autoplay]);

class Home extends React.Component {

  render() {
    
    return (
      <h2> INDEX </h2>
    );
  }
}

export default Home;