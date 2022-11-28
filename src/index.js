import React from 'react';
import ReactDOM from 'react-dom/client';

/**conectar la app por URL */
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Conceptos from './components/Conceptos';
import Aplicacion from './components/Aplicacion';
import Page404 from './components/Page404';

import Inicio from './Inicio';
import Simulacion from './components/Simulacion';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
                  <Route path='/' element={<App />} >
                    <Route index
                          element={<Inicio />}
                    />
                    <Route path='Conceptos' element={<Conceptos />} />
                    <Route path='Aplicacion' element={<Aplicacion />} >
                    </Route>
                    <Route path='Simulacion' element={<Simulacion />} />
                    
                    <Route path='*'
                        element={
                          <Page404/>
                        }>
                    </Route>
                  </Route>
            </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
