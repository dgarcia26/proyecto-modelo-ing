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
            <h3 className='text-center'>Desarrollo del proyecto</h3>
            <ul className="list-group">
              <li className="list-grou´-item card">
              <p>
                <span>Aqui va la investigacion</span><br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem distinctio exercitationem dolore reiciendis 
                maxime quis neque sit quasi voluptatem ipsa? Odit quibusdam laboriosam sit aspernatur ad, fugiat iusto itaque nobis?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati incidunt eos perferendis corrupti quia maiores 
                quisquam illo dicta, earum iusto ex quaerat et blanditiis doloremque sed illum, facilis delectus quo.
              </p>
              </li>
            </ul>
            </div>
            <div className="col-4">
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