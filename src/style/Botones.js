import styled from "styled-components";

const ButtonStyles = styled.button`
  font-family: "Poppins", sans-serif;
  font-size: xx-large;
  font-weight: bold;
  border: 1px solid white;
  border-radius: 20px;
  cursor: pointer;
  margin-inline: 0.5px;
  background-color: springGreen;
  color: white;
  box-shadow: 7px 7px 10px 1px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: white;
    box-shadow: 7px 7px 10px 1px rgba(0, 255, 0, 0.2);
    color: springgreen;
  }
`;

export default ButtonStyles;
