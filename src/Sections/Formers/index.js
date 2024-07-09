import styled from "styled-components";
import alumni from "../../assets/alumni.jpg"

const FormersSection = styled.section`
  width: 100vw;
  height:30vh;
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
  margin:  10rem;

  display: flex;
  align-items:center;
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
margin-bottom: 20px;
`;


const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
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

const AboutText = styled.div`
  width: 50%;
  position: relative;
  @media only Screen and (max-width: 40em) {
    width: 100%;
  }
`;

const Formers = () => {
  return (
    <FormersSection id="formers">
      <Main>
      <div> 
      <Title>Alumni</Title>
      </div>
        <Content>
       
          <AboutText>
            <p> Zeynep Ekici</p>
            <p> Zeynep Akçor</p>
            <p> Yusuf Çağlar Odabaşı </p>
            <p> Mert Yıldız</p>
          </AboutText>
          <Rocket>
            <img src={alumni} alt="alumni"/>
          </Rocket>
        </Content>
      </Main>
    </FormersSection>
  );
};

export default Formers;
