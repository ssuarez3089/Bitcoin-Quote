import React, { Component } from 'react';
import OptionSelect from './OptionSelect';

class Formulario extends Component {

    monedaRef = React.createRef();
    cryptoRef = React.createRef();

    cotizarMonedas = (e) => {
        e.preventDefault();

        const cotizacion = {
            moneda: this.monedaRef.current.value,
            crypto: this.cryptoRef.current.value,
        }
            //console.log(cotizacion)
            //enviar por props

            this.props.obtenerValoresCrypto(cotizacion);
        

    }

    render() { 
        return (
            <div>
                <form onSubmit={this.cotizarMonedas}>
                    <div className="form-group">
                        <label>Coin:</label>
                        <select ref={this.monedaRef}className="form-control">
                            <option value="" disabled defaultValue>Choose your Currency</option>
                            <option value="USD">United States Dollar ($)</option>    
                            <option value="GBP">Pound Sterling (£)</option>
                            <option value="EUR">Euro (€)</option>
                            <option value="AUD">Australian Dollar ($)</option>
                            <option value="CAD">Canadian Dollar ($)</option>
                            <option value="CNY">Chinese Yuan (¥)</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label >Cryptocurrency</label>
                        <select ref={this.cryptoRef} className="form-control">
                            {Object.keys( this.props.monedas ).map(key => (
                                <OptionSelect 
                                    key={key}
                                    moneda={this.props.monedas[key]}
                                />
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <input type="submit" className="btn btn-primary" value="Quote"/>
                    </div>
                </form>
            </div>
          );
    }
}
 
export default Formulario;