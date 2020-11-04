import React from 'react';
import './home.scss';
import $ from 'jquery/dist/jquery';

import SwiperCore, { Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';



import 'swiper/swiper.scss';




import sub_title_background from '../home/image/slide-txt-bg-2-901x59.png'
import img_introdution_col1_1 from '../home/image/home_col_1_1.jpg'
import img_introdution_col2_1 from '../home/image/home_col_2_1.jpg'
import img_introdution_col3_1 from '../home/image/home_col_3_1.jpg'
import img_introdution_col1_2 from '../home/image/2_1.jpg'
import img_introdution_col2_2 from '../home/image/2_2.jpg'
import img_introdution_col3_2 from '../home/image/2_3.jpg'
import img_introdution_col1_3 from '../home/image/3_1.jpg'
import img_introdution_col2_3 from '../home/image/3_2.jpg'
import img_introdution_col3_3 from '../home/image/3_3.jpg'
//
import img_swiper_1 from '../home/image/bg6.jpg'
import img_swiper_2 from '../home/image/swp22.jpg'
import img_swiper_3 from '../home/image/swp3.jpg'



SwiperCore.use([Autoplay]);

class Home extends React.Component {

  onSlideChange() {
    alert('slide changed');
  }
  render() {
    const params = {
      loop: true,
      autoplay: {
        delay: 3000
      },
      onSlideChange: () => {
        $('.swiper-slide .paralax').find('h1').removeClass('scale-1');
        $('.swiper-slide .paralax').find('h1').removeClass('trans-1');
        //sub parallax
        $('.swiper-slide .sub-paralax').find('span').removeClass('scale-1');
        $('.swiper-slide .sub-paralax').find('span').removeClass('trans-1');
        setTimeout(() => {
          $('.swiper-slide .paralax').find('h1').addClass('trans-1');
          $('.swiper-slide .paralax').find('h1').addClass('scale-1');
          //sub parallax
          $('.swiper-slide .sub-paralax').find('span').addClass('trans-1');
          $('.swiper-slide .sub-paralax').find('span').addClass('scale-1');
        }, 100);
      }

    }
    return (
      <div>
        <Swiper {...params}>
          <SwiperSlide>
            <img src={img_swiper_1} alt="img_swiper_1" className=" img-fluid"></img>
            <div className="paralax">
              <h1>graffiti your shoes</h1>
            </div>

            <p className="sub-paralax">
              <span>If you want to graffiti your shoes, do it. Create your own.</span>
              <img src={sub_title_background} className="img-fluid" />
            </p>

          </SwiperSlide>
          <SwiperSlide>
            <img src={img_swiper_2} alt="img_swiper_2" className=" img-fluid"></img>
            <div className="paralax">
              <h1>graffiti your shoes</h1>
            </div>
            <p className="sub-paralax"><span>If you want to graffiti your shoes, do it. Create your own.</span>
              <img src={sub_title_background} className="img-fluid" />
            </p>

          </SwiperSlide>
          <SwiperSlide>
            <img src={img_swiper_3} alt="img_swiper_3" className=" img-fluid"></img>
            <div className="paralax">
              <h1>graffiti your shoes</h1>
            </div>
            <p className="sub-paralax"><span>If you want to graffiti your shoes, do it. Create your own.</span>
              <img src={sub_title_background} className="img-fluid" />
            </p>

          </SwiperSlide>
        </Swiper>
        <div className="informatin_home">
          {/* <img src={backgroundhome} alt="backgroundhome" className="img_background_home"></img> */}

          <div className="introdution">
            <p className="introducaton_first">
              If you want to graffiti your shoes, do it. Create your own. But if you want to
              keep a pristine beauty, this is how you keep 'em clean. Cause taking care of your shoes,
              whether they are a brand new stockingor your favorite daily briefcase will help them keep
            their look or perform longer. <br /><br />
            It helps you feel confident out on the street, on the field
            or meeting other people. So keep it clean and we can do it if you want.
           </p>
            <div className="besst_seller">
              <h5>BEST SELLING SHOES</h5>
            </div>
            <div className="product_home">
              <div className="container">
                <div className="row">
                  <div className="col-md-3">
                    <div className="img_home_first">
                      <img src={img_introdution_col1_1} alt="img_introdution_col1_1" className="img_pagehome_colum_1"></img>
                      <p className="name_img_function"> How To Clean Sneakers </p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="img_home_second">
                      <img src={img_introdution_col2_1} alt="img_introdution_col2_1" className="img_pagehome_colum_1"></img>
                      <p className="name_img_function"> How To Clean Running Shoes </p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="img_home_last">
                      <img src={img_introdution_col3_1} alt="img_introdution_col3_1" className="img_pagehome_colum_1"></img>
                      <p className="name_img_function"> How To Clean Basketball Shoes </p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="img_home_first">
                      <img src={img_introdution_col1_1} alt="img_introdution_col1_1" className="img_pagehome_colum_1"></img>
                      <p className="name_img_function"> How To Clean Sneakers </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="img_bg_cleansneker">
              <div className="img_home_bg_middle"> <h1>HOW TO CLEAN YOUR SHOES</h1></div>
            </div>

            <div className="step">
              <div className="step_take">
                <div className="p">
                  <h4> Step 1</h4>
                  Remove dirt by banging the soles together. Then use a toothbrush to scrub away remaining dirt
                </div>
              </div>
              <div className="step_take">
                <div className="p">
                  <h4> Step 1</h4>
                  Remove dirt by banging the soles together. Then use a toothbrush to scrub away remaining dirt
                </div>
              </div>
              <div className="step_take">
                <div className="p">
                  <h4> Step 1</h4>
                  Remove dirt by banging the soles together. Then use a toothbrush to scrub away remaining dirt
                </div>
              </div>
              <div className="step_take">
                <div className="p">
                  <h4> Step 1</h4>
                  Remove dirt by banging the soles together. Then use a toothbrush to scrub away remaining dirt
                </div>
              </div>
              <div className="step_take">
                <div className="p">
                  <h4> Step 1</h4>
                  Remove dirt by banging the soles together. Then use a toothbrush to scrub away remaining dirt
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="commend">
          <div className="container">
            <form className="clearfix" onSubmit={this.handleSubmit}>
              <input className="form-control" ref="author" type="text" placeholder="Your name" />
              <br/>
              <input className="form-control" ref="author" type="text" placeholder="Your mail" />
              <br />
              <textarea className="form-control" ref="text" rows="3" placeholder="Your comment"></textarea>
              <br />
              <button className="btn btn-primary pull-right">Send</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;