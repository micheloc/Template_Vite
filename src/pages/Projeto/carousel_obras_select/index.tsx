import Viewers from '../../../data/projects_viewer.json';
import Slider, { Settings } from 'react-slick';
import React, { useEffect, useState } from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Props {
  id: number;
}

export default function LstImgs({ id }: Props) {
  const [lstImg, setListImg] = useState<string[]>();
  useEffect(() => {
    const slider = document.querySelector(
      '.slick-slider.slick-initialized',
    ) as HTMLElement;
    if (slider) {
      slider.style.marginLeft = '9.4px';
      slider.style.marginRight = '9px';
    }

    const prev = document.querySelector(
      '.slick-arrow.slick-prev',
    ) as HTMLElement;
    if (prev) prev.style.backgroundColor = 'rgb(0 0 0 / 82%)';

    const next = document.querySelector(
      '.slick-arrow.slick-next',
    ) as HTMLElement;
    if (next) next.style.backgroundColor = 'rgb(0 0 0 / 82%)';
  }, [lstImg]);

  useEffect(() => {
    const objeto = Viewers.filter((obj) => obj.id === id);
    const lst = [];

    for (let i = 1; i <= objeto[0].qtd; i++) {
      lst.push(`${objeto[0].folder + i}.jpg`);
    }

    setListImg(lst);
  }, []);

  // Configurações do Slider
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 10000,
  };

  return (
    <div>
      <Slider {...settings}>
        {lstImg &&
          lstImg.map((img, index) => (
            <div key={index}>
              <img
                src={img}
                width="100%"
                height="720px"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
      </Slider>
    </div>
  );
}
