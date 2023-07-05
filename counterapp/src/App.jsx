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
import DynamicStyle from './Components/04-7-23/DynamicStyle';
import Dynamicclasses from './Components/04-7-23/Dynamicclasses';
import ChildrenProps from './Components/04-7-23/ChildrenProps';
import Params from './Components/02-7-23/Params';
import Singlepoduct from './Components/02-7-23/Singlepoduct';
import Declarativeways from './Components/02-7-23/Declarativeways';
import Map from './Components/02-7-23/Map';
import { useState } from 'react';
import Wrapper from './Components/02-7-23/Wrapper';
import StyledCompo from './Components/02-7-23/StyledCompo.jsx';

function App() {

  const [myUser,setmyUser]= useState(["POOJA","VIDHI","MISHA","MERLIN"])
  return (
    <div>
    <Navbar />
    <Routes>

      <Route path="/login" element={<Login/>}></Route>
      
      <Route exact path="/Type1Useeffect" element={<Type1Useeffect/>}/>
      <Route exact path="/Type2Useeffect" element={<Type2Useeffect/>}/>
      <Route exact path="/Type3Useeffect" element={<Type3Useeffect/>}/>
      <Route exact path="/Type4Useeffect" element={<Type4Useeffect/>}/>
      <Route exact path="/Params" element={<Params/>}/>
      <Route exact path="/Singlepoduct/:id" element={<Singlepoduct/>}/> 
      <Route exact path="/Declarativeways" element={<Declarativeways/>}/>
     <Route exact path='/Map' element={<Map myUser={myUser} setmyUser={setmyUser}  examplearray={["pooja","vidhi","samiksha"]}/>}/>
      <Route exact path="/DynamicStyle" element = {<DynamicStyle/>} />
      <Route exact path="/Dynamicclasses"element = {<Dynamicclasses/>}/>
      <Route exact path='/ChildrenProps' element= {<ChildrenProps/>}/>
      <Route exact path='/Wrapper' element={<Wrapper/>}/>
      <Route exact path='/StyledCompo' element={<StyledCompo/>}/>

      <Route path="/" element={ <Home />}></Route>
      <Route path="/Counter" element={ <Counter/>}></Route>
      <Route path="/section" element={ <Section/>}></Route>


     </Routes>

      <Footer/>
    </div>
  );
}

export default App;
