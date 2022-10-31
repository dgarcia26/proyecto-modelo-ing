import React from 'react'

const Aplicacion = () => {
  return (
    <div>
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
  )
}

export default Aplicacion