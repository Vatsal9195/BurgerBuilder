import React from 'react';

import './BurgerControl.css';

const burgerControl = (props) => {
    return (
        <div className="row BurgerControl d-flex">
            <div className="justify-content-center">
                <h5>{props.label}</h5>
            </div>
            <div className="justify-content-center">
                <button className="btn btn-danger BurgerButton" onClick={props.removed} disabled={props.disabled}>-</button>&nbsp;
                <button className="btn btn-success BurgerButton" onClick={props.added}>+</button>
            </div>
        </div>
    );
}

export default burgerControl;