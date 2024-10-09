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
 
    width: 28%;
}
 
 
`;

const AboutText = styled.div`
  width: 100%;
  position: relative;
 
  @media only Screen and (max-width: 40em) {
    width: 70vw;

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
          <p> Mert Yıldız</p>
          <p> Yusuf Çağlar Odabaşı </p>
            <p> Melisa Ekici</p>
            <p> Zeynep Akçor</p>
            <p> Beyza Aygün</p>
           
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
