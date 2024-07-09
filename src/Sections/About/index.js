import styled from "styled-components";
import gif from   "../../assets/labgif.gif"

const AboutSection = styled.section`
  width: 100vw;
  height:60vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
// const Waves = styled.img`
//   width: 100%;
//   height: auto;
//   position: absolute;
//   top: -3rem;
//   @media only Screen and (max-width: 64em) {
//     top: -2rem;
//   }
//   @media only Screen and (max-width: 40em) {
//    display: none
//   }
// `;

const Main = styled.div`
  margin: 0 10rem;
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media only Screen and (max-width: 64em) {
    margin: 0 calc(5rem + 5vw);
    margin-top: 10rem;
  }
  @media only Screen and (max-width: 40em) {
    align-items: center;
    margin: 3rem calc(3rem + 3vw);
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  display: inline-block;
`;

const CurvedLine = styled.div`
  width: 7rem;
  height: 2rem;
  border: solid 5px var(--purple);
  border-color: var(--purple) transparent transparent transparent;
  border-radius: 150%/60px 70px 0 0;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only Screen and (max-width: 40em) {
    flex-direction: column;
  }
`;

const Rocket = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 58%;
  padding-bottom: 2rem;
  padding-right: 5%;

  @media only Screen and (max-width: 40em) {
    width: 80vw;

  }
`;

const Human = styled.div`
  width: 50%;
  position: absolute;
  right: 0;
  bottom: 100%;

  @media only Screen and (max-width: 40em) {
    display: none;
  }
`;
const Text = styled.h4`
  font-size: calc(0.4rem + 1vw);
  line-height: 1.5;
  color: var(--nav2);
`;
const Circle = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: black;
  margin-right: 0.5rem;
  margin-top: 1rem;
`;
const AboutText = styled.div`
  width: 50%;
  position: relative;
  @media only Screen and (max-width: 40em) {
    width: 100%;
  }
`;

const About = () => {
  return (
    <AboutSection id="aboutus">
      <Main>
        <div>
          <Title>About Us</Title>
          <CurvedLine />
        </div>
        <Content>
          <Rocket>
            <img src={gif} alt="" width="500" height="600"/>
          </Rocket>
          <AboutText>
            <Human>
              {/* <img src={human} alt="" width="400" height="400" /> */}
            </Human>

            <Text>
            We decode the language of genes, unravel complex data, convey groundbreaking insights and advancements in genomics 🧬, bioinformatics 💻, computational biology, and beyond! Stay tuned for a data-driven adventure!
            Check out our <a href="https://github.com/orgs/BMGLab/repositories" target="_blank" rel="noopener noreferrer">GitHub Page </a>!
            </Text>
            <div>
              <Circle style={{ backgroundColor: "var(--purple)" }} />
              <Circle style={{ backgroundColor: "var(--pink)" }} />
              <Circle style={{ backgroundColor: "var(--black)" }} />
            </div>
          </AboutText>
        </Content>
      </Main>
    </AboutSection>
  );
};

export default About;
