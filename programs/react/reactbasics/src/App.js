import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Content from './Content';
import Ipl from './Ipl';
import { FunctionComponent } from './components/FunctionComponent';
import PropertyDemo from './components/PropertyDemo';
import ClassComponent from './components/ClassComponent';
import Car from './components/Car';
import SimpleInterestCalculator from './components/SimpleInterestCalculator';
//import FunctionComponent from './components/FunctionComponent';

function App() {
  const ipldata = [
    {   
        team: "GT",
        matches:14,
        won:10,
        lost:4 
    },
    {   
        team: "CSK",
        matches:14,
        won:8,
        lost:5 
    }
]
  return (
    <div className="App">
      <h1>Welcome to react</h1>
      {/**
      <Header/>
      <Content></Content>
      <Ipl></Ipl>
      <FunctionComponent/>
      <FunctionComponent/>
      <PropertyDemo/>
      <img src='' height=100 width=100>
      <PropertyDemo data={ipldata}></PropertyDemo>
      <ClassComponent/>
      <Car/>
       */}
       <SimpleInterestCalculator/>
       
       
       
    </div>
  );
}

export default App;
