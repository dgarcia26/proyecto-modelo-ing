import React from 'react';
import { Outlet, Link } from 'react-router-dom';


const Navegacion = () => {

   
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="/">Proyecto</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul class="nav">
                <div class="navbar-nav">
                  <Link to="/" class="nav-item nav-link active">Inicio -</Link>
                  <Link to="Conceptos" class="nav-item nav-link">Conceptos -</Link>
                  <Link to="Aplicacion" class="nav-item nav-link">Aplicacion </Link> 
                </div>
            </ul>
        </div>
      </nav>
      <main className="App-content">
          <Outlet />
        </main>
    </div>
  )
}

export default Navegacion