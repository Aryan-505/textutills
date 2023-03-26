// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Textform from './components/Textform';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  const [mode,setmode]=useState('light')
  const [alert,setalert]=useState(null)
  const showalert=(messages,type)=>{
      setalert({
        msg:messages,
        type:type
      })
      setTimeout(() => {
        setalert(null)
      }, 1500);
  }
  const toggle=()=>{
    if(mode==='light'){setmode('dark');document.body.style.backgroundColor='#171757';showalert('Dark mode has been enabled',"success")}
    else {setmode('light');document.body.style.backgroundColor='white';showalert('Light mode has been enabled',"success")}
  }
  return (
    <>
    <Router>
<Navbar title="TextUtils" mode={mode} toggle={toggle}/>
<Alert alert={alert}/>
  <div className="container my-3">
<Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
          <Textform heading="Example Text Area" mode={mode}/>
          </Route>
        </Switch>
</div>
</Router>
 </>
  );
}

export default App;
