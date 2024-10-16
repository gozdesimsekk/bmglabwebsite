
import styled, { keyframes } from "styled-components";
import Labteam from "../../assets/bmglabold.jpg";
import Labteamnew from "../../assets/labteam.png";

const move = keyframes` 
0% { transform: translateY(-5px)  }
    50% { transform: translateY(10px) }
    100% { transform: translateY(-5px) }
`;

const HomeSection = styled.section`
  width: 100vw;
  height: 60vh;
  background-color: #2d64e3;
  display: flex;
  justify-content: center;
  position: relative;
  @media only Screen and (max-width: 48em) {
    height: 70vh;
  }
  @media only Screen and (max-width: 420px) {


    padding-bottom: 1rem;
  }
`;
const MainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
  gap: 10%;
  @media only Screen and (max-width: 48em) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
      gap: 5%;
  }
`;

const MobileSvg = styled.img`
  max-width: 100%;
  width: calc(20% + 20vw);
  border-radius: 30px;
  height: auto;
  z-index: 7;
  animation: ${move} 5.5s ease infinite;
  @media only Screen and (max-width: 48em) {
    align-self: center;
   
    bottom: 10px;
   

  }
  @media only Screen and (max-width: 40em) {
width: calc(30% + 20vw);
  }
`;

const Lb = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 60%;
  line-height: 1.5;
  color: var(--white);
  position: relative;
  z-index: 15;
  @media only Screen and (max-width: 48em) {
    width: 80%;
    text-align: center;
    align-items: center;
    justify-content: space-around;
    margin-top: calc(1rem + 2.5vw);
    filter: drop-shadow(2px 4px 6px black);
  }
  @media only Screen and (max-width: 40em) {
    filter: none;
  }
`;

// const Topic = styled.span`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: var(--nav);
//   color: #04283d;
//   font-weight: 700;
//   font-size: calc(0.4rem + 0.4vw);
//   padding: 0.5rem 1rem;
//   border-radius: 20px;
// `;

// const Circle = styled.span`
//   display: inline-block;
//   width: 1rem;
//   height: 1rem;
//   border-radius: 50%;
//   background-color: var(--purple);
//   margin-right: 0.5rem;
// `;

const Title = styled.h1`
  font-size: calc(2rem + 1vw);
  line-height: 1.2;
  padding: 1rem 0;
`;

const HeroSection = () => {
  return (
    <HomeSection id="home">
      <MainContent id="home">
        <Lb id="leftBlock">
         
          <Title>Single cells, bioinformatics, genomics and beyond!</Title>
        </Lb>
        <MobileSvg
          src={Labteamnew}
          alt="Mobile Svg"
          srcSet=""
          width="400"
          height="400"
        />
      </MainContent>
    </HomeSection>
  );
};

export default HeroSection;
