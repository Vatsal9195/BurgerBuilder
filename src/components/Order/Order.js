import React from 'react';

import Card from 'react-bootstrap/Card';

const order = (props) => {

    const ingredients = [];

    for (let ingredientName in props.ingredients) {
        ingredients.push({ name: ingredientName, amount: props.ingredients[ingredientName] });
    }

    const ingredientOutput = ingredients.map(ig => {
        return <span style={{
            textTransform: 'capitalize', display: 'inline-block', border: '1px solid #ccc', margin: '0 5px', padding: '2px'
        }}
            key={ig.name}>
            {ig.name}({ig.amount})</span>
    });

    return (
        <div className="container">
                <Card style={{margin: '15px 0'}}>
                    <Card.Body>
                        <Card.Title>Customer ID ({props.id})</Card.Title>
                        <hr></hr>
                        <Card.Text>Ingredients: {ingredientOutput}</Card.Text>
                        <hr></hr>
                        <Card.Text >Price: <strong>{props.price}</strong></Card.Text>
                    </Card.Body>
                </Card>
        </div>
    );
}

export default order;