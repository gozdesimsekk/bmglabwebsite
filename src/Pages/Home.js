import HeroSection from "../Sections/Hero/index";
import About from "../Sections/About/index";
import Contact from "../Sections/Contact/index";
import styled from "styled-components";
import Events from "../Sections/Events";
import Team from "../Sections/Team/index";
import ResearchList from "../Sections/Research";
import Formers from "../Sections/Formers";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* position: relative; */
`;

const Home = () => {
  return (
    <Container>
      <HeroSection />
      <About />
      <Events/>
      <Team />
      <Formers/>
      <ResearchList/>

      <Contact />
    </Container>
  );
};

export default Home;
