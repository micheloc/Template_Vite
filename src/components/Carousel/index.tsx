import classNames from 'classnames';
import Slider, { Settings } from 'react-slick';
import styles from './carousel.module.scss';

import bn1 from '../../assets/banners/bn1.jpg';
import bn2 from '../../assets/banners/bn5.jpg';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Carousel() {
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src={bn1} width="100%" height="530px" alt="Slide 1" />
          <div
            className={classNames({
              [styles['container-text']]: true,
            })}
          ></div>
        </div>
        <div>
          <img src={bn2} width="100%" height="530px" alt="Slide 2" />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
