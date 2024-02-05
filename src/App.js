import logo from './logo.svg';
import './App.css';
import StateBasics from './components/StateBasics';
import { Route, Routes } from 'react-router-dom';
import SampleForm from './components/SampleForm';
import { Switch } from '@mui/material';

function App() {
  return (
    <div className='App'>
     
      <Switch>
        <Route path='/' Component ={StateBasics}/>
        <Route path='/form' Component={SampleForm}/>
      </Switch>
    
    </div>
  );
}

export default App;
