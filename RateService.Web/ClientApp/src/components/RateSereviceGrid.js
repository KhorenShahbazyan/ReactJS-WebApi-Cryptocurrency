import React, { Component } from 'react';
import { connect } from 'react-redux';

class RateSereviceGrid extends Component {

    render() {
        return (
            <div>
                <h1> Coins List </h1>
                {renderRatesTable(this.props)}
            </div>
        );
    }
}

function renderRatesTable(props) {

    var numeral = require('numeral');   

    // Logo-Name column    
    const coinname = (name, synbol, imgsrc) => {
        return (
            <h4>
                <div className="divcoinicon" >
                    <img src={require('../../public/images/' + imgsrc)} />
                </div>
                <div>
                    <span> {name} <br />
                        <i className="coinsynbol"> {synbol} </i>
                    </span>
                </div>
            </h4>
        );
    }

    const price = (currPrice, prevPrice, priceformat, rowKey) => {
        let _class = 'price';
       
        if (currPrice > prevPrice) {
            _class = 'priceUp';            
        }

        if (currPrice < prevPrice) {
            _class = 'priceDown';            
        }        
        return (
            <div id={rowKey} className={'current-price-value ' + _class} > {props.currencySettings.symbol + ' ' + numeral(currPrice).format(priceformat) } </div>
        );
    }

    const numberFormatting = (value, valueformat) => {
               
        return (
            <span> {numeral(value).format(valueformat)}</span>
            );
    }   
    
 
    const rows = props.gridData.map((item) => {
        let format = props.currencySettings.numericFormat;
        return (
            <tr key={item.coinSynbol}>
                <td className="name">{coinname(item.coin, item.coinSynbol, item.coinLogo)} </td>
                <td> {new Date(item.rateDateTime).toLocaleString()} </td>
                <td> {price(item.price, item.prvPrice ? item.prvPrice : item.price, format, item.coinSynbol)} </td>
                <td> { numberFormatting(item.price - (item.prvPrice ? item.prvPrice : item.price), format) } </td>
                <td> { numberFormatting(item.quantity, format) } </td>
                <td> { numberFormatting(item.totalVolume, format)} </td>
                <td> { numberFormatting(item.marketCap, format)} </td>
                
            </tr>
        );
    });

    

    return (
        <div>
            <table id="ratesTable" className='table'>

                <thead>
                    <tr>
                        <th className="wpct15">Coin </th>
                        <th className="wpct15"> Rate DateTime</th>
                        <th className="wpct10"> Price</th>
                        <th className="wpct7"> Change size</th>
                        <th className="wpct10"> Quantity</th>
                        <th className="wpct10"> Total Volume </th>
                        <th className="wpct10"> Market Cap </th>
                        
                    </tr >
                </thead >
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>

    );
}

export default connect(
)(RateSereviceGrid);
