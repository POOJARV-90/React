import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import {Routes,Route} from 'react-router-dom'
import Login from './Components/Login';
function App() {
  return (
    <div>

    <Navbar />

    <Routes>
      <Route path="/" element={ <Home />}></Route>
    </Routes>

    <Routes>
      <Route path="/login" element={  <Login/>}></Route>
    </Routes>

     
      
      <Footer/>



    </div>
  );
}

export default App;
