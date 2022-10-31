import React from 'react'

const Conceptos = () => {
  return (
    <div>
        
        <h3 className='text-center'>Movimiento Oscilatorio y Ondas</h3>
        <div className="container">
        <ul className="list-group">
              <li className="list-grou-item">
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
              <h3>Descripción de las ondas</h3>
              <p>
                Para comenzar a estudiar el tema, podemos imaginar que construimos un dispositivo
                con el que se pueden generar ondas. Dicho dispositivo es un péndulo simple que
                consiste en una pesa suspendida de un hilo liviano. El hecho de que el hilo sea liviano
                no es trivial debido a que, si pretendemos estudiar sólo el movimiento de la pesa, la
                masa del hilo jugará un papel importante durante el movimiento de nuestro péndulo en
                los casos en que no sea mucho menor que la masa de la pesa suspendida.
              </p>
              </li>
            </ul>
            </div>
    </div>
  )
}

export default Conceptos