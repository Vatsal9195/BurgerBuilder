import React from 'react';

import Aux from '../../../hoc/Aux';

const orderSummary = (props) => {

    const ingredientList = Object.keys(props.selectedIngredients)
        .map(igKey => {
            return <li key={igKey}>
                <span style={{ textTransform: 'capitalize' }}>{igKey} : {props.selectedIngredients[igKey]}</span>
            </li>
        });

    return (
        <Aux>
            <p>Your Selected Ingredients : </p>
            <ul>
                {ingredientList}
            </ul>
            <h5 style={{color: 'green'}}>Total Price: RS. {props.price}</h5>
        </Aux>);
}

export default orderSummary;