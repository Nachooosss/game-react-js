import Resultado from "./components/Resultado";
import CardStyles from "./style/Card";
import TitleStyle from "./style/TitleStyle";

function App() {
  return (
    <CardStyles className="App">
      <TitleStyle>Proyecto Calculadora Prueba</TitleStyle>
      <section>
        <section>
          <Resultado></Resultado>
        </section>
      </section>
    </CardStyles>
  );
}
export default App;
