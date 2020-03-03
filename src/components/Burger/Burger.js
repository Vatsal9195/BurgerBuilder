import React from 'react';

import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredient)
        .map(igKey => {
            //console.log('ig Key',igKey);
            //console.log('hello',[...Array(props.ingredient[igKey])]);
            return [...Array(props.ingredient[igKey])].map((blank,i)=>{
                //console.log('why',i);
                return <BurgerIngredient key={igKey+i} type={igKey}></BurgerIngredient>
            })
        }).reduce((arr,el)=>{
            return arr.concat(el);
        },[]) ;

        if(transformedIngredients.length === 0){
            transformedIngredients = <p>Please Add ingredients</p>;
        }

    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top"></BurgerIngredient>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"></BurgerIngredient>
        </div>
    );
}

export default burger;