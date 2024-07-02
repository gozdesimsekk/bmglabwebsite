import styled from "styled-components";


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
      {/* <RightText>
        Reach out to us via 
        <a href="https://www.linkedin.com/company/bmglab/">
          <img src={Linkedin} alt="Linkedin" />
        </a>
        &nbsp;
        <a href="https://twitter.com/code_bucks">
          <img src={Twitter} alt="Twitter" />
        </a>
        &nbsp;
        <a href="https://www.instagram.com/code.bucks/">
          <img src={Instagram} alt="Instagram" />
        </a>
        &nbsp;
        <a href="mailto:codebucks27@gmail.com?subject=Email From Your Website">
          <img src={Gmail} alt="Gmail" />
        </a>
      </RightText> */}
    </FOOTER>
  );
};

export default Footer;

//© 2021 by CodeBucks. Design by @CodeBucks.
