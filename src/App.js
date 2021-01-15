import './App.css';
import Header from "./components/Header"
import Body from "./components/Body"
import SolarPanel from "./components/SolarPanel"
import ProductKey from "./components/ProductKey"
import Display from "./components/Display"
import ButtonPad from "./components/ButtonPad"



function App() {
  return (
    <div className="App">
      <Body>
        <Header/>
        <SolarPanel/>
        <ProductKey/>
        <Display/>
        <ButtonPad/>
      </Body>
    </div>
  );
}

export default App;
