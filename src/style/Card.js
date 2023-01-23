import styled from "styled-components";
const CardStyles = styled.div`
  background: linear-gradient(
    35deg,
    rgba(100, 100, 100, 0.4) 50%,
    rgba(255, 255, 255, 0.6)
  );
  width: 330px;
  height: 500px;
  margin: auto;
  margin-block: 10px;
  padding-top: 3%;
  padding-bottom: 7%;
  padding-inline: 2%;
  border-radius: 30px;
  box-shadow: 7px 7px 10px 1px rgba(0, 0, 0, 0.3);
  background-size: 200% 200%;

  &:hover {
    animation: gradient 6s ease infinite;
    @keyframes gradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  }
`;

export default CardStyles;
