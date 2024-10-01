import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Content from './Content';
import Ipl from './Ipl';

function App() {
  return (
    <div className="App">
      <h1>Welcome to react</h1>
      <Header/>
      <Content></Content>
      <Ipl></Ipl>
    </div>
  );
}

export default App;
