import React from 'react';
import { Outlet, Link } from 'react-router-dom';


const Navegacion = () => {

   
  return (
    <div className='respmenu'>
      
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="/">Proyecto</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" 
          data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" 
          aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">                
                <li class="nav-item active">
                  <Link to="/" class="nav-link">Inicio </Link>
                </li>
                <li className='nav-item'>
                  <Link to="Conceptos" class="nav-link">Conceptos </Link>
                </li>
                <li className='nav-item'>
                  <Link to="Aplicacion" class="nav-link">Aplicacion </Link> 
                </li>
                <li className='nav-item'>
                  <Link to="Simulacion" class="nav-link">Simulacion </Link> 
                </li>
              </div>
        </div>
      </nav>
      <main className="App-content">
          <Outlet />
        </main>
    </div>
  )
}

export default Navegacion