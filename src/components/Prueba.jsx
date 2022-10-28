import React from 'react'

const prueba = () => {
  return (
    <div class="container mt-5">
        <h1 className='text-center'>Modelos de Ingenieria</h1>
        <h3 className='text-center'>Proyecto de Clase</h3>
        <hr />
        <div className="container">
          <div className="row">
            
            <div className="col-8">
            <h3 className='text-center'>Movimiento Oscilatorio y Ondas</h3>
            <ul className="list-group">
              <li className="list-grou´-item card">
              <p>
                <h4 className='text-center'>Conceptos</h4>
                A un movimiento que se repite en intervalos de tiempo iguales se lo denomina
                movimiento periódico. Cuando una partícula, en un movimiento periódico, se mueve a
                lo largo de una misma trayectoria de ida y vuelta respecto a una posición de equilibrio,
                se dice que el movimiento que efectúa es oscilatorio o vibratorio
              </p>
              <p>Podemos observar ejemplos de movimiento ondulatorio en la vida diaria, el universo
                está lleno de movimientos de este tipo: las oscilaciones del péndulo de un reloj, las de
                una cuerda de una guitarra, una masa sujeta a un resorte, los átomos y moléculas de una
                estructura cristalina sólida, las ondulaciones que se producen en el agua cuando se lanza
                una piedra a un estanque, las señales electromagnéticas generadas por emisoras de radio
                y televisión, etc.
              </p>
              <img className='ondas container' src="https://www.academico.cecyt7.ipn.mx/recursos/basicas/fisica/fisica4/unidad2/ondas_archivos/image006.jpg" alt="Ondas" />
              </li>
            </ul>
            </div>
            <div className="col-4">
              <div>
                <h4>Julieth Marquez</h4> 
                <h4>Darwin Garcia</h4>
              </div>
              <form action="submin">
                <h3 className='text-center'>Formulario</h3>
                <input class="form-control mb-2" type="text" placeholder="Ingrese Nombre"/>
                <input class="form-control mb-2" type="number" placeholder="Ingrese Valor1"/>
                <input class="form-control mb-2" type="number" placeholder="Ingrese Valor2"/>
                <input class="form-control mb-2" type="number" placeholder="Ingrese Valor3"/>
                <input class="form-control mb-2" type="number" placeholder="Ingrese Valor4"/>
                <button class="btn btn-primary btn-block" type="submit">Calcular</button>
              </form>
            </div>
          </div>


        </div>
        <div>
        <footer className='text-center'>Desarrollado por Sotecpro 2022 <span>©</span></footer>    
        </div>        
    </div>
    
  )
}

export default prueba