import "./App.css";
import HelloWordTeste from "./components/HelloWorld";
import NewPerson from "./components/NewPerson";

function App() {
  return (
    <div className="App">
      <HelloWordTeste />
      <NewPerson name="Michelangelo" idade = "24" title="Programador"/>
    </div>
  );
}

export default App;
