import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import {Routes,Route} from 'react-router-dom';
import Login from './Components/Login';
import Counter from './Components/Counter';
import Section from './Components/Section';
import Type1Useeffect from './Components/Type1Useeffect';
import Type2Useeffect from './Components/Type2Useeffect';
import Type3Useeffect from './Components/Type3Useeffect';
import Type4Useeffect from './Components/Type4Useeffect';

function App() {
  return (
    <div>
    <Navbar />
    <Routes>

      <Route path="/login" element={<Login/>}></Route>
      <Route exact path="/Type1Useeffect" element={<Type1Useeffect/>}/>
      <Route exact path="/Type2Useeffect" element={<Type2Useeffect/>}/>
      <Route exact path="/Type3Useeffect" element={<Type3Useeffect/>}/>
      <Route exact path="/Type4Useeffect" element={<Type4Useeffect/>}/>

      <Route path="/" element={ <Home />}></Route>
      <Route path="/Counter" element={ <Counter/>}></Route>
      <Route path="/section" element={ <Section/>}></Route>

     </Routes>

      <Footer/>
    </div>
  );
}

export default App;
