import React from 'react'
import Footer from './Footer'

const Aplicacion = () => {
  return (
    <div>
      <h2 className='text-center'>Movimiento Oscilatorio y Ondas</h2>
      <div className='container'>
        <h3 className='text-center'>Ejemplos y Aplicacion</h3>
      </div>
        <hr />
        <div className="row">
        
        <div className='col-5'>
          <h3 className='text-center'>Ejemplo</h3>
          <h6 className='text-center'>Un bloque atado a un resorte oscila (sin fricción) entre las posiciones extremas B y 
            B0 indicadas en la figura. Si en 10 segundos pasa 20 veces por el punto B, determinar:</h6>
            <ul>
              <li>a. El período de oscilación.</li>
              <li>b. La frecuencia de oscilación.</li>
              <li>c. La amplitud.</li>
              <img className='im-ej' src="https://docplayer.es/docs-images/76/73164475/images/2-1.jpg" alt="" />
            </ul>
            <h5 className='text-center'>Solución</h5>
            <ul className='separador'>
              <li>a. Cada vez que el bloque pasa por B, completa un ciclo, por tanto, 
                en 10 segundos realiza 20 ciclos, es decir que un ciclo ocurre en un tiempo: T = 10s 20 = 1 2 s 
              </li>
              <li>
              b. La frecuencia es: f = 1 T = 1 1 2 s = 2s −1 = 2Hz 
              </li>
              <li>
              c. El punto de equilibrio del sistema se ubica en el 
              punto medio entre B y B0 . Por lo tanto, la amplitud del movimiento es A = 3cm.
              </li>
            </ul>
            
        </div>
        <div className='col-7'>
        <h4>
          <a href="https://www.myphysicslab.com/develop/build/sims/pendulum/ComparePendulumApp-en.html" >Aplicacion</a>
        </h4>
        <iframe title='Aplicacion' src="https://www.myphysicslab.com/develop/build/sims/pendulum/ComparePendulumApp-en.html" frameborder="150"height="500" width="800"/>
        </div>
        </div>
        
        <Footer/>
  </div>
  )
}

export default Aplicacion