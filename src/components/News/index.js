import styled from "styled-components";

const NEWS = styled.div`
  height: calc(33rem + 12vw);
  width: calc(21rem + 12vw);
  background-color: #e6e6fa;
  border-radius: 20px;
margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  ${'' /* @media only Screen and (max-width: 1089px) {
 
      height: calc(14rem + 12vw);
  width: calc(10rem + 12vw);
 
  } */}

`;
const Image = styled.div`
display: flex;
  width: 100%;
  height: 100%;
 display: flex;
  border-radius: 20px;
margin-top: 5px;
  background: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  filter: drop-shadow(0px -3px 3px var(--nav2));
`;

const Title = styled.h3`
  color: #1B5B83;
  padding: 0.7rem;
  font-weight: 600;
  text-align: center;
  font-size: calc(0.2rem + 1vw);
  
`;
const TEXT = styled.h4`
  color: #0E2F44;
  font-weight: 400;
  padding: 1rem;

  text-align: center;
  font-size: calc(0.4rem + 0.5vw);
`;

const News = ({ text, image,title }) => {
  const Newimage = require(`../../assets/${image}.jpg`);

  return (
    <NEWS>
      <Image img={Newimage} width="600" height="900" />
      <Title>{title} </Title>
      <TEXT>{text}</TEXT>
      
    </NEWS>
  );
};

export default News;
