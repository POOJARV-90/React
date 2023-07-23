import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Navbar from './Components/15-7-23/Navbar';
import Footer from './Components/Footer';
import {Routes,Route} from 'react-router-dom';
import Login from './Components/15-7-23/Login';
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
import StyledCompo from './Components/02-7-23/StyledCom'
import FormOne from './Components/06-7-23/FormOne';
import Callback from './Components/08-7-23/Callback';
import Formtwo from './Components/08-7-23/Formtwo';
import UseMemo from './Components/09-7-23/UseMemo';
import UseReducer from './Components/09-7-23/UseReducer';
import ProductsFromBackend from './Components/11-7-23/ProductsFromBackend';
import Product from './Components/13-7-23/Product ';
import Register from './Components/15-7-23/Register';
import Loginflight from './Components/flight/Loginflight';
import Cart from './Components/18-7-23/Cart';
import Profile from './Components/22-7-23/Profile';
;

function App() {

  const [myUser,setmyUser]= useState(["POOJA","VIDHI","MISHA","MERLIN"])
  return (
    <div>
    <Navbar/>
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
      <Route exact path='/FormOne' element={<FormOne/>}/>
      <Route exact path='/Callback' element={<Callback/>}/>
      <Route exact path='/Formtwo' element={<Formtwo/>}/>
      <Route exact path='/UseMemo' element={<UseMemo/>}/>
      <Route exact path='/UseReducer' element={<UseReducer/>}/>
      <Route exact path='/ProductsFromBackend' element={<ProductsFromBackend/>}/>
      <Route exact path='/product/:id' element={<Product />} />
      <Route path="/" element={ <Home />}></Route>
      <Route path="/Counter" element={ <Counter/>}></Route>
      <Route path="/section" element={ <Section/>}></Route>
      <Route path="/Register" element={ <Register/>}></Route>
      <Route path="/Loginflight" element={ <Loginflight/>}></Route>
      <Route path="/Cart" element={ <Cart/>}></Route>
      <Route path="/Profile" element={ <Profile/>} />





     </Routes>

      <Footer/>
    </div>
  );
}

export default App;
