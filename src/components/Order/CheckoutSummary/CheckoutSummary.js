import React from 'react';

import Burger from '../../Burger/Burger';
import './CheckoutSummary';

const checkoutSummary = (props) => {
    return (
        <div className="CheckoutSummary">
            <h1>We hope it tastes well!</h1>
            <div style={{ width: '100%', margin: 'auto' }}>
                <Burger ingredient={props.ingredients}></Burger>
            </div>
            <h4>PRICE: {props.totalPrice}</h4>
            <button className="btn btn-danger" onClick={props.checkoutCancel}>Cancel</button>&nbsp;
            <button className="btn btn-success" onClick={props.checkoutContinue}>Continue</button>
        </div>
    );
}

export default checkoutSummary;