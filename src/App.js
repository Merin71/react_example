import logo from './logo.svg';
import './App.css';
import StateBasics from './components/StateBasics';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SampleForm from './components/SampleForm';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element ={<StateBasics/>}/>
        <Route path='/form' element={<SampleForm/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
