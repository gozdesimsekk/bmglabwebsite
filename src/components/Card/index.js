import styled from "styled-components";

const CARD = styled.div`
  height: calc(10rem + 12vw);
  width: calc(11rem + 12vw);
  background-color: var(--nav2);
  border-radius: 20px;
  position: relative;
  margin-top: calc(5rem + 5vw);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.div`
  width: 50%;
  height: 50%;
  position: absolute;
  left: 50%;
  bottom: 80%;
  transform: translate(-50%);
  border-radius: 50%;
  background-color: red;
  background: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  filter: drop-shadow(0px -3px 3px var(--nav2));
`;

const TEXT = styled.h4`
  color: var(--white);
  padding: 0 calc(1rem + 1vw);
  padding-top: 1rem;
  text-align: center;
  font-size: calc(0.6rem + 0.5vw);
`;

const NAME = styled.h3`
  color: var(--pink);
  padding-top: 1rem;
  font-size: calc(0.5rem + 1vw);
`;
const Title = styled.h3`
  color: var(--cardtitle);
  padding-top: 0.5rem;
  font-weight: 400;
  font-size: calc(0.2rem + 1vw);
`;

const Card = ({ name, text, image,title }) => {
  const Avatar = require(`../../assets/${image}.jpg`);

  return (
    <CARD>
      <Image img={Avatar} width="400" height="400" />
      <NAME>{name}</NAME>
      <Title>{title} </Title>
      <TEXT>{text}</TEXT>
    </CARD>
  );
};

export default Card;
