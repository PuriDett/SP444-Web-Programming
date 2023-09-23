import logo from './logo.svg';
import './App.css';
import Guess from './components/Guess';



function App() {
  return (
    <div style={{margin:"30px"}}>
      <h1>Guess the number between 1 and 5</h1>
      <Guess/>
    </div>
  );
}

export default App;
