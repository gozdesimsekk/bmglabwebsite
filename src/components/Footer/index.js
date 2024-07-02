import styled from "styled-components";
import genfoquest from "../../assets/genfoquest_logo.png"

const FOOTER = styled.footer`
  padding: 1.2rem calc(2.5rem + 2.5vw);
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only Screen and (max-width: 48em) {
    flex-direction: column;
    align-items: center;
    div {
      &:first-child {
        margin-bottom: 1rem;
      }
    }
  }
`;
const RightText = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 1.5rem;
    height: 1.5rem;
    margin-left: 1rem;
   
  }
 
`;
const LeftText = styled.div`
  text-align: left;
`;
const Footer = () => {
  return (
    <FOOTER>
      <LeftText>
        © 2024 Built by{" "}
        <a href="https://github.com/gozdesimsekk" target="_blank" rel="noopener noreferrer">
          @gozdesimsekk
        </a>
      </LeftText>
      <RightText>
  
        A lifetime sponsor of BMGlab
        <a href="https://genfoquest.com/" target="_blank" rel="noopener noreferrer">

          <img src={genfoquest} alt="Genfoquest Analytica" />
        </a>
      
      </RightText> 
    </FOOTER>
  );
};

export default Footer;

//© 2021 by CodeBucks. Design by @CodeBucks.
