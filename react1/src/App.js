import logo from './logo.svg';
import './App.css';
import { PrimerComponente } from './componentes/PrimerComponente/PrimerComponente';
import { Menu } from './componentes/Menu/Menu';
import { useState } from 'react';

function App() {
  const[sesionActiva,setsesionActiva]=useState(false);
  const[sesionCerrada,setSesionCerrada]=useState("Activa")
  function inicarS(){
    console.log(sesionActiva)
    if(sesionActiva==true){
      setSesionCerrada("Cerrada")
setsesionActiva(false)
    }else{
      setSesionCerrada("Activa")
setsesionActiva(true)
    }
  }
  return (
    <div className="App">
  
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      
          <Menu onClick={inicarS} SesionIniciada={sesionCerrada} >

          </Menu>
          <PrimerComponente/>
          Learn React
    
      </header>
    </div>
  );
}

export default App;
