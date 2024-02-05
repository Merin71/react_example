import logo from './logo.svg';
import './App.css';
import StateBasics from './components/StateBasics';
import { Route, Routes } from 'react-router-dom';
import SampleForm from './components/SampleForm';

function App() {
  return (
    <div className='App'>
     
      <Routes>
        <Route path='/' Component ={StateBasics}/>
        <Route path='/form' Component={SampleForm}/>
      </Routes>
    
    </div>
  );
}

export default App;
