import React from 'react'
import Footer from './Footer'

const Conceptos = () => {
  return (
    <div>
      <main>        
        <h2 className='text-center'>Movimiento Oscilatorio y Ondas</h2>
        <div className="container">                   
              <p>
                <h3 className='text-center'>Conceptos</h3>
                <hr />
                <h2 className='text-center'>Onda</h2>
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
              <img className='ondas container' src="https://www.academico.cecyt7.ipn.mx/recursos/basicas/fisica/fisica4/unidad2/ondas_archivos/image006.jpg" alt="Ondas" /><br />
              <h3>Descripción de las ondas</h3>
              <p>
              Onda es el conjunto de valores 
              sucesivos que toma una cantidad de una partícula en movimiento ondulatorio durante un ciclo.
              </p>              
              <h3> Periodo de una onda </h3>
              <p>
                El periodo de una Onda, es el tiempo requerido para realizar un ciclo, es decir,
                 un viaje de ida y vuelta completo. Sus unidades por tanto son las de tiempo, es decir, el 
                 segundo y se denomina T
              </p>
              <h5 className='text-center'> [T] = s </h5>

              <h3> Frecuencia de una onda </h3>
              <p>
                La frecuencia es la inversa del periodo, sus unidades son <b> [f] = 1/T </b> 
              </p>
              <h5 className='text-center'> f = 1/T </h5>
              <h3> Amplitud </h3>
              <p>
              La distancia máxima entre el punto más alejado de una onda (u oscilación) y el punto de 
              equilibrio o medio es la amplitud de una oscilación, es decir, la amplitud corresponde a la
              màxima elongaciòn desde el punto de equilibrio. 
              </p>
              <h5>Elongación y Amplitud</h5>
              <p>
              A cada valor de longitud de una onda mecánica, medida perpendicularmente desde la posición de equilibrio 
              del medio le denominamos elongación, su unidad de medida es el metro. La elongación mayor de 
              una onda le llamamos Amplitud. Las elongaciones importantes en una onda son: Cresta, 
              es la amplitud  positiva; Nodo es la elongación nula;  y Valle que corresponde con la amplitud negativa.
              </p>
              <p>Semejante a una partícula en M. A. S. (movimiento armónico simple), la elongación de una partícula 
                en una onda senoidal se puede determinar para cada instante con el modelo: X = Acos2&#960;ft
              </p>
              <p>Donde A es la amplitud de la onda, X la elongación y f la frecuencia.
                Por lo que respecta a la velocidad instantánea, el modelo es: V = -2 &#960; f Asen2 &#960; f t
                y la aceleracion es: a = -4&#960;^2 f^2X
              </p>
              <div className='row'>
              <div className='col-12'>
              <p><img className='comp container' src="http://uapas1.bunam.unam.mx/matematicas/funcion_senoidal_amplitud/images/imagen4_OAFunci%C2%A2nsenoidal-1.jpg" alt="" /></p>
              </div>
              </div><br />
              <h2 className='text-center'>Movimiento Oscilatorio</h2>
              <p>El movimiento de un cuerpo unido a un muelle es un movimiento periódico, 
                pues en él se repiten todas las magnitudes del movimiento a intervalos regulares de tiempo. 
                Como puedes apreciar en la imagen, se produce un movimiento de ida y vuelta en el que en cada una 
                de las posiciones el cuerpo tiene una velocidad y aceleración determinadas, 
                que hacen que se reproduzca de manera reiterada a lo largo del tiempo. Se dice, 
                entonces, que tiene lugar un movimiento oscilatorio o vibratorio.</p>
              <img src="https://lidiaconlaquimica.files.wordpress.com/2016/03/movimiento-oscilatorio.gif?w=158&h=435" alt="" />
              <h6 className='text-center'>Un movimiento oscilatorio es un movimiento periódico de vaivén en torno a una posición central, 
                denominada posición de equilibrio, se produce cuando al trasladar un sistema de su posición de equilibrio, 
                una fuerza restauradora lo obliga a desplazarse a puntos simétricos con respecto a esta posición.
              </h6><br />
              <span>Para describir un movimiento oscilatorio es necesario tener en cuenta los siguientes elementos:</span>
              <div className='container'>
                <ul>
                  <li>La oscilación: una oscilación o ciclo se produce cuando un objeto, a partir de determinada posición, 
                    después de ocupar todas las posibles posiciones de la trayectoria, regresa a ella.</li>
                  <li>El período: es el tiempo que tarda un objeto en realizar una oscilación. 
                    Su unidad en el Sistema Internacional (SI) es el segundo y se representa con la letra T.</li>
                  <li>La frecuencia: es el número de ciclos que realiza un objeto por segundo. 
                    La frecuencia, representada por f, se expresa en el SI en hercios (Hz).</li>
                </ul>                
              </div>
              <p>En el movimiento oscilatorio, al igual que en el movimiento circular uniforme, la frecuencia y el período se relacionan entre sí, siendo uno recíproco del otro, es decir: 
                  f = 1/T  
                  T = 1/f
              </p>
              <div className="container">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ-gWHi1ffDbjmdiF4Q73fWAYW6dh9fxEC3g&usqp=CAU" alt="" />
                <ul>
                  <li>La elongación: es la posición que ocupa un objeto respecto de su posición de equilibrio. En la figura se representan diferentes elongaciones: x1, x2 y x3. 
                  </li>
                  <li>La amplitud: la amplitud del movimiento, denotada con A, es la mayor distancia (máxima elongación) que un objeto alcanza respecto de su posición de equilibrio. La unidad de A en el SI es el metro. En el ejemplo de la figura la amplitud es A = 10m
                  </li>
                  </ul>
              </div>

              <br/><hr />
                <h2 className='text-center'>Péndulo</h2><br />
                <div className="row">
                  <div className="col-4">
                  <p>Es un modelo ideal de un sistema mas complejo, que consiste en un cuerpo de masa m, suspendido de un hilo 
                inextensible y de masa despreciable en un campo gravitacional uniforme. Cuando el cuerpo se desvía de 
                su posición de equilibrio y se libera, empieza a oscilar a lado y lado de esa posición. Sin embargo, 
                para que dicha oscilación pueda definirse como movimiento armónico simple, la fuerza restauradora debe 
                ser proporcional a la coordenada x. </p>
                  </div>
                  <div className="col-8">
                  <img src="https://img.photobucket.com/albums/v376/paulogm/pendulo.gif" alt="pedulo" />
                  </div>

                </div>
                <h3> Fórmulas de péndulo simple </h3>
              <img src="http://www.sc.ehu.es/sbweb/fisica3/oscilaciones/pendulo/pendulo_1.gif" alt="" />
              <p>Al descomponer la fuera mg, se obtienen dos fuerzas; F = mgsenθ que es la encargada de llevar el péndulo
              al punto de equilibrio. Además, para ángulos muy pequeños, el seno de θ, se aproxima a (x/L), donde x es la distancia entre el punto de 
              equilibrio y un punto cualquiera, y L serìa longitud de la cuerda y, en consecuencia la fuerza mgsenθ se puede expresar como F = -mgsenθ.
              Esta fuerza cumple con las especificaciones de una fuerza restauradora, es decir, para pequeños ángulos, el movimiento de un péndulo, es 
              Movimiento armónico simple o M.A.S. Por otro lado, la fuerza mgcosθ no tiene influencia en el movimiento, ya que solo equilibra la tensión 
              de la cuerda.  </p><br/>
              <img src="https://www.fisicaenlinea.com/08proyectiles/images/pendulo01.gif" alt="" />
            </div>
            </main><br />  
            <Footer/>         
    </div>
  )
}

export default Conceptos