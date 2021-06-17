import './App.css';
import Header from './components/Header';
import { Fragment, useState } from 'react';
import Formulario from './components/Formulario';
import Mensaje from './components/Mensaje';
import Resultado from './components/Resultado';



function App() {

  const [cantidad, guardarCantidad] = useState(0);
  const [plazo, guardarPlazo] = useState('');
  const [total, guardarTotal] = useState(0);
  

  let componente;
  if (total === 0) {
    componente = <Mensaje/>
  } else {
    componente = <Resultado
                  total={total}
                  plazo={plazo}
                  cantidad={cantidad}
                  />
  }


  return (
    <Fragment> 
      <Header titulo="cotizador"/>
      <div className="container"> 
        <Formulario 
          cantidad = {cantidad} 
          guardarCantidad = {guardarCantidad} 
          plazo = {plazo}
          guardarPlazo = {guardarPlazo}
          total = {total}
          guardarTotal = {guardarTotal}
        /> 
        <div className="mensajes"> 
          {componente}
        </div>
      </div> 
    </Fragment>
  );
}

export default App;
