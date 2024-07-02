import React, { lazy } from "react";
import styled from "styled-components";

import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

const News = lazy(() => import("../../components/News/index"));

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem;
`;

const Title = styled.h1`
  color: #0a0b10;
  display: inline-block;
  font-size: calc(0.6rem + 1.5vw);
  margin-top: 1rem;
  position: relative;
  text-align: center;
  &::before {
    content: "";
    height: 1px;
    width: 50%;

    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    /* or 100px */
    border-bottom: 2px solid var(--purple);
  }
`;

const Carousal = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only Screen and (max-width: 40em) {

    .slick-slider .slick-arrow {
      display: none;
    }
  }
  .slick-slider .slick-arrow:before {
    color: #0a0b10;
    font-size: 1.5rem;
    @media only Screen and (max-width: 40em) {
      display: none;
    }
  }
  .slick-slider .slick-dots button:before {
    color: #0a0b10;
    font-size: 1.5rem;
  }
  .slick-slide.slick-active {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;
    padding: 0;
    margin-bottom: 3rem;
  }
`;

const Events = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplaySpeed: 6000,
        }
      },
      
    ]  
  };

  return (
    <Section  id="events">
      <Title>Our Events</Title>

      <Carousal>
        <Slider {...settings}>
          <News
       image="costnet4brain"
       title="Training School on Brain Cancer Study and Data Integration in Prague COST CA22103"
       text={
              <>
                <p> <strong> 24 April – 26 April 2024, Prague, Czech Republic </strong></p>
                <p>Connecting the dots between multimodal data domains for brain cancer research - Yasin Kaymaz</p>
                <p>Deep learning approaches to brain tumor histopathology and gene expression levels - Gözde Şimşek</p>
                <p>Pathway to Pathogenesis: Exploring Glioblastoma through Pathway Scoring Algorithms - Ebru Kocakaya</p>
              </>
            }
          />

          <News
                image="costnet4brain"
          />

          <News
              image="costnet4brain"
          />

          <News
                 image="costnet4brain"
          />
        </Slider>
      </Carousal>
    </Section>
  );
};

export default Events;
