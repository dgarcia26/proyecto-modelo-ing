import React from 'react'

const Conceptos = () => {
  return (
    <div>
        
        <h2 className='text-center'>Movimiento Oscilatorio y Ondas</h2>
        <div className="container">
                   
              <p>
                <h3 className='text-center'>Conceptos</h3>
                <hr />
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
              <h3> Periodo </h3>
              <p>
                El periodo de una oscilaciòn, es el tiempo requerido para una oscilaciòn completa, es decir,
                 un viaje de ida y vuelta completo. Sus unidades por tanto son las de tiempo, es decir, el 
                 segundo.
              </p>
              <h5 className='text-center'> [T] = s </h5>

              <h3> Frecuencia </h3>
              <p>
                La frecuencia es la inversa del periodo, sus unidades son <b> [f] = rps = Hz </b> 
              </p>
              <h5 className='text-center'> f = 1/T </h5>
              <h3> Amplitud </h3>
              <p>
              La distancia máxima entre el punto más alejado de una onda (u oscilación) y el punto de 
              equilibrio o medio es la amplitud de una oscilación, es decir, la amplitud corresponde a la
              màxima elongaciòn desde el punto de equilibrio. 
              </p>
              <div className='row'>
                <div className='col-6'>
              <img className='comp' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM4AAACaCAMAAADW3ocXAAAB5lBMVEXu9uj2+ejm8uf9/
              Onp8+fx9+js9uj//On5+ujv9uj3+uj0+Ojw9+jt9ujz+Ojn8+fy9+jo8+fr9Oj6+uj7++jq9Ojk8uf/66Pv791AOzSZjGWYlowjHx9x
              bmUXro/HxrcqJiZIRUI2MzF7z7na3M1nZWC2ua4+PDr3r5h3eXTW39TAx76BhH7n5KZfVZvV8+dUUk/70cL97ulPwac6up7N1ctYWFU
              jIE7e4dE6NjWkpZuxs6i8v7OXmI/x992mqZ/5vKj6yLf2n4X1mH++5dWc2sc2Kyn6zLvn6cP98s7Hrpegmo24zNXpu31dS1+ax9axfFB
              UcJhZKCphrNL/9cKNPyVEgrnclUGv5+nMejMjK2DmqlInH0GY2uQjPH2TTCh7vtmedVtpfo2vn4J3Zmvm2sjBm3+NnpmMZ1rCiFBalsaZ
              h4aco4VnXoPgtmixXiqHVFWPRDxMk7fOyJZfKj6XtK+kdzXqzn8+I0eRwsXEn1MrNXnHgjc0cLYuXpC2t53Xs4yGcplBOGx/lbU5TJ3d6
              6xYJmq5Xh+vcValT0GOv6N8YnxpQThSOjWoa2FZNS54RTrGclxsU0vUjnlqNi1Ln9DGur6Qj7eIZUFkQyeaho+vplmgXC1qZUnQ7MySRi
              e6lXKqjFVuW++YAAAMjklEQVR4nO2Xi3/bxB3AXdU1cdI2TmmNwHYtKZYcPTorbU7IelhpSUwobN1oG8KjpYNRAmWF0jIYG6yjbOu2pEn
              aMAZjD/7TnWzZlmxJ1uOu6/jk+/nEuvvd6X731Z0eyTz2gyKDPcNzZ583X5jEnqYLdp0f/+Tc0ed++rMG7jxdcOs88eL5o489duHi6mHM
              ibrg1nnp6TX423r5lTXMibpg1ul5dK3wk9mPl1dfuwR/Wy9fbmBO1AW3zoXXV3P79z/x4pWjmBN1wa2z/8LP39Df/MW5Sdx5umDXgTvtL
              QJ/EoeHoPMw2dN5lMkcRQoZmcfRJnZArFMpPxmNchVtYgfUOk89EY0n93QisKcTxv9c53GkxNBBm9hhTyeMypNPRaP8f6FjlEaRyxWfqI
              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
              ZyQMPNy/tSAAAAABJRU5ErkJggg==" alt="" />
              </div>
              <div className='col-6'>
              <p><img className='comp' src="http://uapas1.bunam.unam.mx/matematicas/funcion_senoidal_amplitud/images/imagen4_OAFunci%C2%A2nsenoidal-1.jpg" alt="" /></p>
              </div>
              </div>
              <h3>Movimiento Oscilatorio</h3>
              <p>El movimiento de un cuerpo unido a un muelle es un movimiento periódico, 
                pues en él se repiten todas las magnitudes del movimiento a intervalos regulares de tiempo. 
                Como puedes apreciar en la imagen, se produce un movimiento de ida y vuelta en el que en cada una 
                de las posiciones el cuerpo tiene una velocidad y aceleración determinadas, 
                que hacen que se reproduzca de manera reiterada a lo largo del tiempo. Se dice, 
                entonces, que tiene lugar un movimiento oscilatorio o vibratorio.</p>
              <img src="https://lidiaconlaquimica.files.wordpress.com/2016/03/movimiento-oscilatorio.gif?w=158&h=435" alt="" />
              <span className='text-center'>Un movimiento oscilatorio es un movimiento periódico de vaivén en torno a una posición central, 
                denominada posición de equilibrio.</span>
                         
            </div>
    </div>
  )
}

export default Conceptos