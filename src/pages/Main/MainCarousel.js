import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Maincarousel = () => {
  const [carouselImages, setCarouselImages] = useState([]);

  useEffect(() => {
    fetch('/data/MainCarouselImagesData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setCarouselImages(data);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
  };

  return (
    <CarouselWrapper>
      <Slider {...settings}>
        {carouselImages.map(img => {
          return (
            <div key={img.id}>
              <CarouselImg imgURL={img.imgURL} />
            </div>
          );
        })}
      </Slider>
    </CarouselWrapper>
  );
};

const CarouselImg = styled.div`
  width: 520px;
  height: 130px;
  background-image: url(${props => props.imgURL});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 2px;
`;

const CarouselWrapper = styled(Slider)`
  width: 100%;
  margin-bottom: 70px;

  .slick-prev {
    z-index: 1;
    left: 10px;
    background-color: none;
  }

  .slick-next {
    right: 10px;
    background-color: none;
  }

  .slick-slider .slick-slide {
    &:nth-child(odd) {
      padding: 0 10px 0 0;
    }

    &:nth-child(even) {
      padding: 0 0 0 10px;
    }
  }
`;

export default Maincarousel;
