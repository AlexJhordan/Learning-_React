import './App.css';
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'
import Frase from './components/Frase'
import Lista from './components/Lista'

function App() {
  return (
    <div>
      <HelloWorld />
      <Frase/>
      <Frase/>
      <SayMyName nome="Alex"/>
      <h4>Suas informações...</h4>
      <Pessoa 
        nome="Alex" 
        idade="20" 
        trabalho="Dev Front End"
        local="Brasil"
        link="https://placehold.co/200"
      />
      <Lista/>
    </div>
  );
}

export default App;