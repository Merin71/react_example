import logo from './logo.svg';
import './App.css';
import StateBasics from './components/StateBasics';
import {BrowserRouter as Router  ,Route, Routes } from 'react-router-dom';
import SampleForm from './components/SampleForm';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='App'>
     <Navbar/>
      <Router basename="/react_example">
        <Route path='/' element ={<StateBasics/>}/>
        <Route path='/form' element={<SampleForm/>}/>
      </Router>
    
    </div>
  );
}

export default App;
