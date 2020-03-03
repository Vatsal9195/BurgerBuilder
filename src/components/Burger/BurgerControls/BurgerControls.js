import React from 'react';
import BurgerControl from './BurgerControl/BurgerControl';

import './BurgerControls.css';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
];

const burgerControls = (props) => {
    return (
        <div className="card bg-secondary text-white BurgerControls">
            <div className="card-header bg-dark text-white">
                <h4>Add Ingredients</h4>
            </div>
            <div className="card-body">
                <p style={{ textAlign: "left", fontSize:"1.2rem"}}>Current Price: <strong>{props.currentPrice}</strong>
                    <button className="btn btn-primary float-right" disabled={!props.purchasable} onClick={props.handle}>ORDER NOW</button>
                </p>
                <hr></hr>
                <div style={{ marginTop: "20px" }}>
                    {controls.map(ctrl =>
                        <BurgerControl
                            key={ctrl.label}
                            label={ctrl.label}
                            added={() => props.addIngredient(ctrl.type)}
                            removed={() => props.removeIngredient(ctrl.type)}
                            disabled={props.disableButton[ctrl.type]}>

                        </BurgerControl>
                    )}
                </div>
            </div>
        </div>
    );
}

export default burgerControls;