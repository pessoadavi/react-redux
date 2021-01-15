import './App.css';
import Card from './components/Card';
import Intervalo from "./components/Intervalo";

function App() {
  return (
    <div className="App">
      <h1>Exercício React-Redux(Simples)</h1>
      <div className="linha">
        <Intervalo red ></Intervalo>
      </div>
      <div className="linha">
        <Card title="CARD 02" green >X</Card>
        <Card title="CARD 02" blue >X</Card>
        <Card title="CARD 02" purple >X</Card>
      </div>
    </div>
  );
}

export default App;
