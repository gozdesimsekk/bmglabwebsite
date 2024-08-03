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
       image="lungatlas1"
       title="Atlas Working Group Meeting on Lung Diseases-MyeInfoBank COST Action"
       text={
              <>
          <p>From July 17-19, 2024, Ege University hosted the Atlas Working Group Meeting on Lung Diseases, organized by Yasin Kaymaz, PhD. This event brought together members of the MyeInfoBank COST Action to outline a road map and define the next steps for the lung atlas 🫁. Key topics discussed included cell type annotations, downstream analysis, and atlas interpretation.</p>
              </>
            }
          />
      <News
       image="ephesus"
       title="Journey Through Time: Discovering Ephesus with the MyeInfoBank and BMGLab Family"
       text={
              <>
          <p>As the BMGLab family, we were thrilled to host a tour of Ephesus Ancient City 🏛️ for our participants following the event in İzmir. We aimed to give our guests a closer look at Turkey's rich history and cultural heritage 🇹🇷. The tour was a fun and educational experience 🎉, providing a perfect complement to the scientific discussions. We want to thank all our participants for joining us on this unforgettable journey! 🙏✨ </p>
              </>
            }
          />
          <News
       image="costnet4brain"
       title="Training School on Brain Cancer Study and Data Integration in Prague COST CA22103"
       text={
              <>
                <p> <strong> 24 April – 26 April 2024, Prague, Czech Republic </strong></p>
                <p>Connecting the dots between multimodal data domains for brain cancer research - Yasin Kaymaz 🧠 </p>
                <p>Deep learning approaches to brain tumor histopathology and gene expression levels - Gözde Şimşek 👩🏽‍💻</p>
                <p>Pathway to Pathogenesis: Exploring Glioblastoma through Pathway Scoring Algorithms - Ebru Kocakaya 📍</p>
              </>
            }
          />
    <News
       image="ebrutuseb"
       title="Third Place at the TÜSEB Future Health Technologies - Genomics Congress"
       text={
              <>
          <p> Ebru Kocakaya, a PhD candidate at BMGLab, presented an oral presentation at the Future Health Technologies - Genomics Congress organized by Turkey Health Institutes Association. Our research focused on the effectiveness of CAR-T Cell therapy against lung cancer 🫁, and we secured third place in Istanbul 🥉.</p>
              </>
            }
          />
          <News
       image="costmye"
       title="MYE-INFOBANK poster presentation - Budva, Montenegro"
       text={
              <>
          <p>PosterSession participants and organizers in Budva! 🌟 It was a successful meeting on science, with contributions from our PhD candidates Ebru Kocakaya and master's student Duygu Keremitçi. Congratulations to Ebru for achieving second place 🥈, and a shoutout to Duygu for her research on scRNA-seq! 👏🫁</p>
              </>
            }
          />
          <News
       image="cliff"
       title="Seq-Well Study with Dr. Derrick K Deconti from Harvard and Dr. Cliff Odour from Brown"
       text={
              <>
          <p>From a hectic July to a promising August!⏩ Hosting two great minds was a true honor – Dr. Derrick K Deconti from Harvard TH Chan School of Public Health and Dr. Cliff Odour from Brown University!🧠 Together, we worked on Seq-Well, a platform by shaleklab for scRNA-seq!🔬✨</p>
              </>
            }
          />
      


        </Slider>
      </Carousal>
    </Section>
  );
};

export default Events;
