import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import GetData from './components/GetData';
import Signup from './components/UserCrud';
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
     <Route path="/signup" element={<Signup/>}/>
     <Route path='/login' element={<Login/>}/>
     </Routes>
    </div>
  );
}

export default App;
