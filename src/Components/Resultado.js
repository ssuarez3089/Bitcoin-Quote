import React, { Component } from 'react';

class Resultado extends Component {

    mostrarResultado = () => {

        const monedaCotizada = this.props.monedaCotizada;

        const {name, quotes} = this.props.cotizacion;
            if(!name) return null;

           const {price, percent_change_1h, percent_change_24h, percent_change_7d, volume_24h} = quotes[monedaCotizada]

        return(
            <div className="bg-success py-4">
                <div className="resumen text-light text-center">
                    <h2 className="mb-4">Resumen</h2>
                    <p><span className="font-weight-bold">Price of {name} in {monedaCotizada} is:</span> ${(price).toFixed(3)}</p>
                    <p><span className="font-weight-bold">last minute percentage</span> %{percent_change_1h}</p>
                    <p><span className="font-weight-bold">24h percentage</span> %{percent_change_24h}</p>
                    <p><span className="font-weight-bold">weekly percentage</span> %{percent_change_7d}</p>
                    <p><span className="font-weight-bold">24h volume</span> {volume_24h}</p>
                </div>
            </div>
        )
    }

    render() { 
        return ( 
            <React.Fragment>
            {this.mostrarResultado()}
            </React.Fragment>
         );
    }
}
 
export default Resultado;