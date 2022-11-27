import logo from './logo.svg';
import './App.css';
import {NavLink, Routes, Route} from 'react-router-dom'

import {useState, useEffect} from 'react'

import Accounts from './Accounts';
import Comp1 from './Comp1';
import Comp2 from './Comp2';
import Comp3 from './Comp3';
import Comp4 from './Comp4';
import Comp5 from './Comp5';
import Comp6 from './Comp6';
import Main from './Main';
import Cards from './Cards';
import Main1 from './Main1';
import Comp7 from './Comp7';
import Comp8 from './Comp8';
import Comp9 from './Comp9';
import Comp10 from './Comp10';
import Comp11 from './Comp11';
import Comp12 from './Comp12';

function App() {

  var array = ["none", "none"]

  const [state, setstate] = useState(array);
  const [state1, setstate1] = useState(array);
  const [state2, setstate2]  = useState(true);

  useEffect(()=>{
    window.addEventListener('popstate', ()=>{

      if (window.location.pathname==="/accounts"){
        var array1 = ["none", "none"]
        setstate(array1);
      }

      else if (window.location.pathname==="/accounts/comp1" || window.location.pathname==="/accounts/comp2" || window.location.pathname==="/accounts/comp3"){
        var array1 = ["block", "none"]
        setstate(array1);
      }

      else if (window.location.pathname==="/accounts/comp4" || window.location.pathname==="/accounts/comp5" || window.location.pathname==="/accounts/comp6"){
        var array1 = ["none", "block"]
        setstate(array1);
      }



      else if (window.location.pathname==="/cards"){
        var array1 = ["none", "none"]
        setstate1(array1);
      }

      else if (window.location.pathname==="/cards/comp7" || window.location.pathname==="/cards/comp8"  || window.location.pathname==="/cards/comp9" ){
        var array1 = ["block", "none"]
        setstate1(array1);
      }

      else if (window.location.pathname==="/cards/comp10"  || window.location.pathname==="/cards/comp11"  || window.location.pathname==="/cards/comp12" ){
        var array1 = ["none", "block"]
        setstate1(array1);
      }

      else{

      }
    })
  }, [])


  useEffect(()=>{
   

      if (window.location.pathname==="/accounts"){
        let array1 = ["none", "none"]
        setstate(array1);
      }

      else if (window.location.pathname==="/accounts/comp1" || window.location.pathname==="/accounts/comp2" || window.location.pathname==="/accounts/comp3"){
        let array1 = ["block", "none"]
        setstate(array1);
      }

      else if (window.location.pathname==="/accounts/comp4" || window.location.pathname==="/accounts/comp5" || window.location.pathname==="/accounts/comp6"){
        let array1 = ["none", "block"]
        setstate(array1);
      }


      else if (window.location.pathname==="/cards"){
        let array1 = ["none", "none"]
        setstate1(array1);
      }

      else if (window.location.pathname==="/cards/comp7" || window.location.pathname==="/cards/comp8"  || window.location.pathname==="/cards/comp9" ){
        let array1 = ["block", "none"]
        setstate1(array1);
      }

      else if (window.location.pathname==="/cards/comp10"  || window.location.pathname==="/cards/comp11"  || window.location.pathname==="/cards/comp12" ){
        let array1 = ["none", "block"]
        setstate1(array1);
      }

      else{

      }

     
    
  }, [])

function myfun(){

  var array1 = ["none", "none"]
  setstate(array1);
}


function myfun1(){

  var array1 = ["none", "none"]
  setstate1(array1);
}
  return (
    <div>

      <header className="header">
<NavLink className="styling" style={({ isActive }) => ({ 
                            color: isActive ? 'skyblue' : 'blue' })} onClick={myfun} to="/accounts">Accounts</NavLink>
<NavLink className="styling" style={({ isActive }) => ({ 
                          color: isActive ? 'skyblue' : 'blue' })} onClick={myfun1} to="/cards">Cards</NavLink>

</header>  

<Routes>

  <Route path="/accounts" element={ <Accounts state={state} setstate={setstate}/>}>
  <Route path=""  element={<Main/>}></Route>

    <Route path="comp1" element={<Comp1/>}></Route>
    <Route path="comp2" element={<Comp2/>}></Route>
    <Route path="comp3" element={<Comp3/>}></Route>
    <Route path="comp4" element={<Comp4/>}></Route>
    <Route path="comp5" element={<Comp5/>}></Route>
    <Route path="comp6" element={<Comp6/>}></Route>
  </Route>

  <Route path="/cards" element={ <Cards state={state1} setstate={setstate1}/>}>
  <Route path=""  element={<Main1/>}></Route>

    <Route path="comp7" element={<Comp7/>}></Route>
    <Route path="comp8" element={<Comp8/>}></Route>
    <Route path="comp9" element={<Comp9/>}></Route>
    <Route path="comp10" element={<Comp10/>}></Route>
    <Route path="comp11" element={<Comp11/>}></Route>
    <Route path="comp12" element={<Comp12/>}></Route>
  </Route>
</Routes>
    
    
    </div>
  );
}

export default App;
