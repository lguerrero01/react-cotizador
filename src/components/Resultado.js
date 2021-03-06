import React, {Fragment}from 'react'

const Resultado = (props) => {
    const {total, cantidad, plazo} = props;
    return (  
    <Fragment>
        <div className ="u-full-width resultado">
            <h2>Resumen</h2>
            <p>La cantidad solicitada es: ${cantidad}</p>
            <p>A pagar en {plazo} Meses</p>
            <p>Su pago mensual es de: ${(total/plazo).toFixed(2)}</p>
            <p>Total a pagar: ${total}</p>

        </div>
    </Fragment>);
}
 
export default Resultado;