import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import {Routes,Route} from 'react-router-dom';
import Login from './Components/Login';
import Counter from './Components/Counter';
import Section from './Components/Section';



function App() {
  return (
    <div>

    <Navbar />

    <Routes>
    <Route path="/login" element={  <Login/>}></Route>
     
      <Route path="/" element={ <Home />}></Route>
      <Route path="/counter" element={ <Counter/>}></Route>
      <Route path="/section" element={ <Section/>}></Route>

    </Routes>

   

    

     
      
      <Footer/>



    </div>
  );
}

export default App;
