import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Screens/Homepage';
import AboutUs from './Screens/AboutUs';
import Form from './Screens/Form';
import SuccessMessage from './Screens/SuccessMessage';

function App() {
  return (
    <Routes>
              
      <Route path='/' element={<Homepage />} />
      <Route path='/about' element={<AboutUs />} />
      <Route path='/form' element={<Form />} />
      <Route path='/success' element={<SuccessMessage />} />
        
    </Routes>
  );
}

export default App;
