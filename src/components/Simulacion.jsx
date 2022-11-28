import React from 'react'
import Footer from './Footer';


const Simulacion = () => {

  

  const promesa = fetch(`./simulacion.htm`);

          promesa.then(res => {
           res.text().then(html => {
            console.log(html)
           })
          })
  
  return (
    <div>
      <h1 className='text-center'>Simulacion Proeycto</h1>
      <div className="row">
        <div className="col-1">
        </div>
        <div className="col-10">
        {/*eslint-disable-next-line*/}
        <iframe src="https://main--marvelous-blini-4a1a67.netlify.app/" className='container text-center' frameborder="100"height="900" width="900"/>         
        </div>
        <div className="col-1"></div>
      </div>
      
      <Footer/>      
    </div>
  )
}

export default Simulacion