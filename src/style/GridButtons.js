import styled from "styled-components";
const GridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 4fr);
  width: 100%;
  gap: 2px;
  grid-auto-rows: minmax(80px, auto);
`;

export default GridStyles;
