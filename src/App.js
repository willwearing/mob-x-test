import "./App.css";
import "antd/dist/antd.css";

//import components
import ButtonTest from "./components/ButtonTest";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="app-title">Space X Mission List</h1>
        <ButtonTest />
      </header>
    </div>
  );
}

export default App;
