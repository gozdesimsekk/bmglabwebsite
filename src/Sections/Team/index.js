import React, { lazy } from "react";
import styled from "styled-components";

import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

const Card = lazy(() => import("../../components/Card/index"));

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5rem 0;
`;

const Title = styled.h1`
  color: #0a0b10;
  display: inline-block;
  font-size: calc(1rem + 1.5vw);
  margin-top: 1.5rem;
  position: relative;
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
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only Screen and (max-width: 40em) {
    width: 90vw;
    .slick-slider .slick-arrow {
      display: none;
    }
  }
  .slick-slider .slick-arrow:before {
    color: #0a0b10;
    font-size:2rem;
    @media only Screen and (max-width: 40em) {
      display: none;
    }
  }
  .slick-slider .slick-dots button:before {
    color: #0a0b10;
    font-size: 1rem;
  }
  .slick-slide.slick-active {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;
    padding: 0;
    margin-bottom: 2rem;
  }
  
`;

const Team = () => {
  const settings = {
    dots: true,
    infinite: true,

    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Section  id="team">
      <Title>BMGLab Team</Title>
      <Carousal>
        <Slider {...settings}>
        <Card
            text="I lead the BMGLab team, focusing on the dynamic behavior of disease-related genes at the transcriptomic level, particularly in immune cells. We develop advanced bioinformatics methods to analyze complex genetic data, aiming to provide valuable insights into disease biology for researchers."
            name="Yasin Kaymaz"
            image="yasinkaymaz"
            title="P.I."
          />
            <Card
            text="I completed my Master's research on liver cancer stem cells. My doctoral research is on genomics, especially on scRNA-seq with an emphasis on lung and glioblastoma cancers and developing gene scoring algorithms."
            name="Ebru Kocakaya"
            image="ebrukocakaya"
            title="PhD Candidate"
          /> 
            <Card
            text="I am a PhD candidate in the Computer Science program of the Department of Mathematics. My research focuses on developing CNN models for brain cancer data and enhancing accuracy through mathematical optimization."
            name="Khuraman Sayın"
            image="khuramansayın"
            title="PhD Candidate"
          />    
            <Card
            text="I am a PhD candidate and Bioinformatics Scientist at the German Cancer Research Center. My research focuses on miRNA inference and regulatory network analysis with scRNA-seq data in cancer and other diseases."
            name="Ali Yavuz Çakır"
            image="aliyavuzcakir"
            title="PhD Candidate"
          />   
           <Card
            text="My research focuses on using machine learning and hierarchical classification approaches to study macrophage subtypes in the lung cancer tumor microenvironment."
            name="Duygu Keremitçi"
            image="duygukeremitci"
            title="Master's student"
          />  
          <Card
            text="I am working on brain cancer radiopathomics artificial intelligence models and clinical, genomic data analysis in the BMG lab. I am also a front-end developer at Genfoquest Analytica, which collaborates with the lab."
            name="Gözde Şimşek"
            title="Master's student"
            image="gozdesimsek"
          />
          <Card
            text="I work in the laboratory, focusing on the analysis of various genomic data, including scRNA-seq, bulk-seq, and PAS-seq data. These diverse genomic datasets are related to cancer research, plant biology, and various proteins."
            name="Özlem Tuna"
            image="ozlemtuna"
            title="Master's student"
          /> 
          <Card
            text="I'm currently pursuing my master's studies as a mathematics graduate in the BMG lab. My focus is on developing and analyzing scoring methods from single-cell RNA sequencing (scRNA-seq) data."
            name="Zeynep Garan"
            image="zeynepgaran"
            title="Master's student"
          />    
           <Card
            text="Single cell lover, I contribute to computational biology and bioinformatics studies from a bioengineering perspective for personalized medicine applications in the field of cancer treatment and beyond."
            name="Ozan Göçmen"
            image="ozangocmen"
            title="Master's student"
          />        
 <Card
            text="As a bioinformatician and code developer, I work on genomics-based projects at Genfoquest Analytica. My role involves conducting detailed bioinformatics analyses and developing innovative computational tools. "
            name="Elif Duymaz"
            title="MSc. Bioinformatician"
            image="elifduymaz"
          />
          <Card
            text="I am a Python developer and data engineer at BMGLab, experienced in working with NGS data. Additionally, I contribute as a back-end developer at Genfoquest Analytica, a collaborator with our lab."
            name="Amir Amiri Tabat"
            image="amiramiritabat"
            title="Long Term Intern"
          />
           <Card
            text="I work as a python developer and manage containers and environments on computers. Additionally, I have gained experience with data engineering through projects and lab work."
            name="Elyar Bafandeh Zendeh"
            image="elyar"
            title="Long Term Intern"
          />
          <Card
            text="I am interested in bioinformatics and have a keen interest in the field of genomics. I have been working on bioinformatics studies in the laboratory for two years and gain experience in various projects during this period."
            name="Melike Güler"
            image="melikegüler"
            title="Long Term Intern"
          />
          <Card
            text="Zeynep Akçor, Melisa Ekici"
            name="Alumni"
            image="alumni"
         
          />
        </Slider>
      </Carousal>
    </Section>
  );
};

export default Team;
