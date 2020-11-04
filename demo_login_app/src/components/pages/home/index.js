import React from 'react';

import SwiperCore, { Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


import '../home/index.scss';
import 'swiper/swiper.scss';




//colum1
import img_male_colum1_1 from '../home/image/3mc-shoes.jpg'
import img_male_hover_colum1_1 from '../home/image/3mc-shoes1.jpg'

import img_male_colum1_2 from '../home/image/adidas-4d-run-1.0-shoes.jpg'
import img_male_hover_colum1_2 from '../home/image/adidas-4d-run-1.0-shoes (1).jpg'


import img_male_colum1_3 from '../home/image/busenitz-vulc-2.0-shoes.png'
import img_male_hover_colum1_3 from '../home/image/busenitz-vulc-2.0-shoesas.jpg'

import img_male_colum1_4 from '../home/image/continental-80-vegan-shoes.jpg'
import img_male_hover_colum1_4 from '../home/image/continental-80-vegan-shoes (1).jpg'



//colum2
import img_male_colum2_1 from '../home/image/zx-2k-4d-shoes6.png'
import img_male_hover_colum2_1 from '../home/image/zx-2k-4d-shoes.jpg'


import img_male_colum2_2 from '../home/image/nizza-trefoil-shoes.jpg'
import img_male_hover_colum2_2 from '../home/image/nizza-trefoil-shoes (1).jpg'


import img_male_colum2_3 from '../home/image/nmd_r1-shoes.jpg'
import img_male_hover_colum2_3 from '../home/image/nmd_r1-shoes (1).jpg'


import img_male_colum2_4 from '../home/image/nmd_r1-v2-shoes.jpg'
import img_male_hover_colum2_4 from '../home/image/nmd_r1-v2-shoes (1).jpg'



//colum3
import img_male_colum3_1 from '../home/image/ozweego-shoes.jpg'
import img_male_hover_colum3_1 from '../home/image/ozweego-shoes (1).jpg'


import img_male_colum3_2 from '../home/image/questar-flow-shoes.jpg'
import img_male_hover_colum3_2 from '../home/image/questar-flow-shoes (1).jpg'


import img_male_colum3_3 from '../home/image/stan-smith-shoes (1).jpg'
import img_male_hover_colum3_3 from '../home/image/stan-smith-shoes (2).jpg'


import img_male_colum3_4 from '../home/image/stan-smith-shoes (3).jpg'
import img_male_hover_colum3_4 from '../home/image/stan-smith-shoes (4).jpg'


//colum4
import img_male_colum4_1 from '../home/image/stan-smith-shoes.png'
import img_male_hove_colum4_1 from '../home/image/stan-smsith-shoes.jpg'


import img_male_colum4_2 from '../home/image/strutter-shoes.png'
import img_male_hove_colum4_2 from '../home/image/strutters-shoes.jpg'


import img_male_colum4_3 from '../home/image/ultraboost-20-shoes (4).jpg'
import img_male_hove_colum4_3 from '../home/image/ultraboost-20-shoes (5).jpg'


import img_male_colum4_4 from '../home/image/superstar-shoes.jpg'
import img_male_hove_colum4_4 from '../home/image/superstar-shoes (1).jpg'






SwiperCore.use([Autoplay]);

class Home extends React.Component {

  render() {
    
    return (
      <div className="male_product_all">
        <div className="container">
          <div className="row">
            <div className="col-md-10">
              <h1 className="header_namePage_male">
                <span> SẢN PHẨM HOT </span>
              </h1>
            </div>
          </div>
          <div className="row">
            {/* hinh anh san pham cot 1 */}
            <div className="col-md-3">
              {/* 1.1 */}
              <div className="product">
                <div className="img-product">
                  <div className="social">
                    <div className="qick-view-social">
                      <a href="#">👁️‍🗨️</a>
                    </div>
                    <div className="wishlist-social">
                      <a href="#">❤️</a>
                    </div>
                  </div>
                  <div className="img-product-1">
                    <img src={img_male_hover_colum1_1} className="img-fluid" />
                  </div>
                  <div className="img-product-2">
                    <img src={img_male_colum1_1} className="img-fluid" />
                  </div>
                  <a className="btn-xem" href="#"><span>Xem Phim</span></a>
                </div>
                <div className="content">
                  <a href="#">Women's Designer Top</a>
                  <p>$599.99</p>
                </div>
              </div>
              {/* 1.2 */}
              <div className="product">
                <div className="img-product">
                  <div className="social">
                    <div className="qick-view-social">
                      <a href="#">👁️‍🗨️</a>
                    </div>
                    <div className="wishlist-social">
                      <a href="#">❤️</a>
                    </div>
                  </div>
                  <div className="img-product-1">
                    <img src={img_male_hover_colum1_2} className="img-fluid" />
                  </div>
                  <div className="img-product-2">
                    <img src={img_male_colum1_2} className="img-fluid" />
                  </div>
                  <a className="btn-xem" href="#"><span>Xem Phim</span></a>
                </div>
                <div className="content">
                  <a href="#">Women's Designer Top</a>
                  <p>$599.99</p>
                </div>
              </div>
              {/* 1.3 */}
              <div className="product">
                <div className="img-product">
                  <div className="social">
                    <div className="qick-view-social">
                      <a href="#">👁️‍🗨️</a>
                    </div>
                    <div className="wishlist-social">
                      <a href="#">❤️</a>
                    </div>
                  </div>
                  <div className="img-product-1">
                    <img src={img_male_hover_colum1_3} className="img-fluid" />
                  </div>
                  <div className="img-product-2">
                    <img src={img_male_colum1_3} className="img-fluid" />
                  </div>
                  <a className="btn-xem" href="#"><span>Xem Phim</span></a>
                </div>
                <div className="content">
                  <a href="#">Women's Designer Top</a>
                  <p>$599.99</p>
                </div>
              </div>
              {/* 1.4 */}
              <div className="product">
                <div className="img-product">
                  <div className="social">
                    <div className="qick-view-social">
                      <a href="#">👁️‍🗨️</a>
                    </div>

                    <div className="wishlist-social">
                      <a href="#">❤️</a>
                    </div>
                  </div>
                  <div className="img-product-1">
                    <img src={img_male_hover_colum1_4} className="img-fluid" />
                  </div>
                  <div className="img-product-2">
                    <img src={img_male_colum1_4} className="img-fluid" />
                  </div>
                  <a className="btn-xem" href="#"><span>Xem Phim</span></a>
                </div>
                <div className="content">
                  <a href="#">Women's Designer Top</a>
                  <p>$599.99</p>
                </div>
              </div>
              {/* end collum 1 */}
            </div>
            {/* Hinh anh san pham cot thu 2  */}
            <div className="col-md-3">
              {/* 2.1 */}
              <div className="product">
                <div className="img-product">
                  <div className="social">
                    <div className="qick-view-social">
                      <a href="#">👁️‍🗨️</a>
                    </div>

                    <div className="wishlist-social">
                      <a href="#">❤️</a>
                    </div>
                  </div>
                  <div className="img-product-1">
                    <img src={img_male_hover_colum2_1} className="img-fluid" />
                  </div>
                  <div className="img-product-2">
                    <img src={img_male_colum2_1} className="img-fluid" />
                  </div>
                  <a className="btn-xem" href="#"><span>Xem Phim</span></a>
                </div>
                <div className="content">
                  <a href="#">Women's Designer Top</a>
                  <p>$599.99</p>
                </div>
              </div>
              {/* 2.2 */}
              <div className="product">
                <div className="img-product">
                  <div className="social">
                    <div className="qick-view-social">
                      <a href="#">👁️‍🗨️</a>
                    </div>

                    <div className="wishlist-social">
                      <a href="#">❤️</a>
                    </div>
                  </div>
                  <div className="img-product-1">
                    <img src={img_male_hover_colum2_2} className="img-fluid" />
                  </div>
                  <div className="img-product-2">
                    <img src={img_male_colum2_2} className="img-fluid" />
                  </div>
                  <a className="btn-xem" href="#"><span>Xem Phim</span></a>
                </div>
                <div className="content">
                  <a href="#">Women's Designer Top</a>
                  <p>$599.99</p>
                </div>
              </div>
              {/* 2.3 */}
              <div className="product">
                <div className="img-product">
                  <div className="social">
                    <div className="qick-view-social">
                      <a href="#">👁️‍🗨️</a>
                    </div>

                    <div className="wishlist-social">
                      <a href="#">❤️</a>
                    </div>
                  </div>
                  <div className="img-product-1">
                    <img src={img_male_hover_colum2_3} className="img-fluid" />
                  </div>
                  <div className="img-product-2">
                    <img src={img_male_colum2_3} className="img-fluid" />
                  </div>
                  <a className="btn-xem" href="#"><span>Xem Phim</span></a>
                </div>
                <div className="content">
                  <a href="#">Women's Designer Top</a>
                  <p>$599.99</p>
                </div>
              </div>
              {/* 2.4 */}
              <div className="product">
                <div className="img-product">
                  <div className="social">
                    <div className="qick-view-social">
                      <a href="#">👁️‍🗨️</a>
                    </div>

                    <div className="wishlist-social">
                      <a href="#">❤️</a>
                    </div>
                  </div>
                  <div className="img-product-1">
                    <img src={img_male_hover_colum2_4} className="img-fluid" />
                  </div>
                  <div className="img-product-2">
                    <img src={img_male_colum2_4} className="img-fluid" />
                  </div>
                  <a className="btn-xem" href="#"><span>Xem Phim</span></a>
                </div>
                <div className="content">
                  <a href="#">Women's Designer Top</a>
                  <p>$599.99</p>
                </div>
              </div>
              {/* edn collum 2 */}
            </div>
            {/* Hinh anh san pham cot thu 3  */}
            <div className="col-md-3">
              <div className="product">
                <div className="img-product">
                  <div className="social">
                    <div className="qick-view-social">
                      <a href="#">👁️‍🗨️</a>
                    </div>

                    <div className="wishlist-social">
                      <a href="#">❤️</a>
                    </div>
                  </div>
                  <div className="img-product-1">
                    <img src={img_male_hover_colum3_1} className="img-fluid" />
                  </div>
                  <div className="img-product-2">
                    <img src={img_male_colum3_1} className="img-fluid" />
                  </div>
                  <a className="btn-xem" href="#"><span>Xem Phim</span></a>
                </div>
                <div className="content">
                  <a href="#">Women's Designer Top</a>
                  <p>$599.99</p>
                </div>
              </div>
              {/* 3.2 */}
              <div className="product">
                <div className="img-product">
                  <div className="social">
                    <div className="qick-view-social">
                      <a href="#">👁️‍🗨️</a>
                    </div>

                    <div className="wishlist-social">
                      <a href="#">❤️</a>
                    </div>
                  </div>
                  <div className="img-product-1">
                    <img src={img_male_hover_colum3_2} className="img-fluid" />
                  </div>
                  <div className="img-product-2">
                    <img src={img_male_colum3_2} className="img-fluid" />
                  </div>
                  <a className="btn-xem" href="#"><span>Xem Phim</span></a>
                </div>
                <div className="content">
                  <a href="#">Women's Designer Top</a>
                  <p>$599.99</p>
                </div>
              </div>
              {/* 3.3 */}
              <div className="product">
                <div className="img-product">
                  <div className="social">
                    <div className="qick-view-social">
                      <a href="#">👁️‍🗨️</a>
                    </div>

                    <div className="wishlist-social">
                      <a href="#">❤️</a>
                    </div>
                  </div>
                  <div className="img-product-1">
                    <img src={img_male_hover_colum3_3} className="img-fluid" />
                  </div>
                  <div className="img-product-2">
                    <img src={img_male_colum3_3} className="img-fluid" />
                  </div>
                  <a className="btn-xem" href="#"><span>Xem Phim</span></a>
                </div>
                <div className="content">
                  <a href="#">Women's Designer Top</a>
                  <p>$599.99</p>
                </div>
              </div>
              {/* 3.4 */}
              <div className="product">
                <div className="img-product">
                  <div className="social">
                    <div className="qick-view-social">
                      <a href="#">👁️‍🗨️</a>
                    </div>

                    <div className="wishlist-social">
                      <a href="#">❤️</a>
                    </div>
                  </div>
                  <div className="img-product-1">
                    <img src={img_male_hover_colum3_4} className="img-fluid" />
                  </div>
                  <div className="img-product-2">
                    <img src={img_male_colum3_4} className="img-fluid" />
                  </div>
                  <a className="btn-xem" href="#"><span>Xem Phim</span></a>
                </div>
                <div className="content">
                  <a href="#">Women's Designer Top</a>
                  <p>$599.99</p>
                </div>
              </div>
            </div>
            {/* end collum 3 */}
            {/* Hinh anh san pham cot thu 4  */}
            {/* 4.1 */}
            <div className="col-md-3">
              <div className="product">
                <div className="img-product">
                  <div className="social">
                    <div className="qick-view-social">
                      <a href="#">👁️‍🗨️</a>
                    </div>

                    <div className="wishlist-social">
                      <a href="#">❤️</a>
                    </div>
                  </div>
                  <div className="img-product-1">
                    <img src={img_male_hove_colum4_1} className="img-fluid" />
                  </div>
                  <div className="img-product-2">
                    <img src={img_male_colum4_1} className="img-fluid" />
                  </div>
                  <a className="btn-xem" href="#"><span>Xem Phim</span></a>
                </div>
                <div className="content">
                  <a href="#">Women's Designer Top</a>
                  <p>$599.99</p>
                </div>
              </div>
              {/* 4.2 */}
              <div className="product">
                <div className="img-product">
                  <div className="social">
                    <div className="qick-view-social">
                      <a href="#">👁️‍🗨️</a>
                    </div>

                    <div className="wishlist-social">
                      <a href="#">❤️</a>
                    </div>
                  </div>
                  <div className="img-product-1">
                    <img src={img_male_hove_colum4_2} className="img-fluid" />
                  </div>
                  <div className="img-product-2">
                    <img src={img_male_colum4_2} className="img-fluid" />
                  </div>
                  <a className="btn-xem" href="#"><span>Xem Phim</span></a>
                </div>
                <div className="content">
                  <a href="#">Women's Designer Top</a>
                  <p>$599.99</p>
                </div>
              </div>
              {/* 4.3 */}
              <div className="product">
                <div className="img-product">
                  <div className="social">
                    <div className="qick-view-social">
                      <a href="#">👁️‍🗨️</a>
                    </div>

                    <div className="wishlist-social">
                      <a href="#">❤️</a>
                    </div>
                  </div>
                  <div className="img-product-1">
                    <img src={img_male_hove_colum4_3} className="img-fluid" />
                  </div>
                  <div className="img-product-2">
                    <img src={img_male_colum4_3} className="img-fluid" />
                  </div>
                  <a className="btn-xem" href="#"><span>Xem Phim</span></a>
                </div>
                <div className="content">
                  <a href="#">Women's Designer Top</a>
                  <p>$599.99</p>
                </div>
              </div>
              {/* 4.4 */}             
               <div className="product">
                <div className="img-product">
                  <div className="social">
                    <div className="qick-view-social">
                      <a href="#">👁️‍🗨️</a>
                    </div>

                    <div className="wishlist-social">
                      <a href="#">❤️</a>
                    </div>
                  </div>
                  <div className="img-product-1">
                    <img src={img_male_hove_colum4_4} className="img-fluid" />
                  </div>
                  <div className="img-product-2">
                    <img src={img_male_colum4_4} className="img-fluid" />
                  </div>
                  <a className="btn-xem" href="#"><span>Xem Phim</span></a>
                </div>
                <div className="content">
                  <a href="#">Women's Designer Top</a>
                  <p>$599.99</p>
                </div>
              </div>
              {/* end collum 4 */}
            </div>
            {/*  */}
          </div>
        </div>
        {/* <div className="container">
          <div className="infomation_male">
            <h5>JAE MEN’S SHOES</h5>
            <br />
           adidas men’s shoes cover the full spectrum of function, from surface-specific sports shoes designed for the turf or court, to vintage-inspired sneakers. Whether you’re lacing up to get in the game, dressing down to
           hit the streets or kicking back after a workout, you’ll find exactly what you need to do it in comfort and style.
           <br />
            <br />
            <h5>HOW TO LACE YOUR SHOES</h5>
            <br />
          Learn more about how to lace your shoes properly and all the different techniques that can help you get the most comfort and functionality out of your shoes. Find our How To Lace Your Shoes library here.
          <br />
            <br />
            <h5>HOW TO CLEAN YOUR SHOES</h5>
            <br />
          Shoes get dirty. Unfortunately, there is just no way of getting aorund that. However, there is something you can do about it. Follow these easy steps to help you keep your shoes looking brand new.
          <br />
            <br />
            <h5>HOW TO PREVENT CHAFING</h5>
            <br />
          Even the most seasoned runner needs to be prepared for the unknown and the last thing you want after a tough run is chafe. Check out our tips on How to Prevent Chafing to help you
          stay on the go whether it be on your usual route or running a marathon!
          <br />
            <br />
          </div>
        </div> */}
      </div>
    );
  }
}

export default Home;