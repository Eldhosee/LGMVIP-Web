import { useState } from 'react';
import './App.css';
import Fetchdata from './components';
import Loader from './components/loader';
import Nav from './components/nav';

function App() {
 const [flag,setflag]=useState((0))
  return (
    <div className="App">
      <Nav changeFlag={flag=>setflag(flag)}/>
      <h1 class="h1">User Data</h1>
      {flag==1&&<Fetchdata/>}
    </div>
  );
}

export default App;
