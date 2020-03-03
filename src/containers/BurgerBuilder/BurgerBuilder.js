import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls';
import ModalUI from '../../components/UI/Modal/ModalUI';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-order';
import Spinner from 'react-bootstrap/Spinner';
import errorHandler from '../../hoc/ErrorHandler/ErrorHandler';
import * as burgerBuilderActions from '../../store/actions/index';


class burgerBuilder extends Component {

    state = {
        modalToggler: false
    }

    componentDidMount() {
        //console.log(this.props);
        this.props.onInitIngredients();
    }

    updatePurchasable = (ingredients) => {

        const sum = Object.keys(ingredients)
            .map(igKey => {
                //console.log('if key',ingredients[igKey]);
                return ingredients[igKey];
            }
            ).reduce((sum, el) => {
                return sum + el;
            }, 0);
        //console.log('sum',sum);
        return sum > 0;
    }

    // addIngredientHandler = (type) => {
    //     //updating the number of ingredients
    //     //console.log(type);
    //     //console.log(this.state.ingredients[type]);
    //     const updatedCount = this.state.ingredients[type] + 1;
    //     //console.log(updatedCount);
    //     const updatedIngredients = {
    //         ...this.state.ingredients
    //     };
    //     //console.log(updatedIngredients)
    //     updatedIngredients[type] = updatedCount;

    //     //updating the price with adding ingredient
    //     const updatedPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    //     this.setState({ totalPrice: updatedPrice, ingredients: updatedIngredients });
    //     this.updatePurchasable(updatedIngredients);
    // }

    // removeIngredientHandler = (type) => {
    //     if (this.state.ingredients[type] <= 0) {
    //         return;
    //     }
    //     const updatedCount = this.state.ingredients[type] - 1;
    //     //console.log(updatedCount);
    //     const updatedIngredients = {
    //         ...this.state.ingredients
    //     };
    //     //console.log(updatedIngredients)
    //     updatedIngredients[type] = updatedCount;
    //     //console.log(updatedIngredients[type]);

    //     //updating the price with adding ingredient
    //     const updatedPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
    //     this.setState({ totalPrice: updatedPrice, ingredients: updatedIngredients });
    //     this.updatePurchasable(updatedIngredients);
    // }

    modalHandler = () => {
        const toggler = this.state.modalToggler;
        this.setState({ modalToggler: !toggler })
    }

    purchaseHandler = () => {
        this.props.onInitPurchase();
        this.props.history.push('/checkout');
    }

    render() {

        const disableInfo = { ...this.props.ings };
        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0;
        }

        // console.log(this.state.purchasable);
        return (
            this.props.ings ? <Aux>
                <ModalUI show={this.state.modalToggler} handle={this.modalHandler} purchase={this.purchaseHandler}>
                    <OrderSummary selectedIngredients={this.props.ings} price={this.props.price}></OrderSummary>
                </ModalUI>
                <Burger ingredient={this.props.ings}></Burger>
                <BurgerControls
                    addIngredient={this.props.onIngredientsAdded}
                    removeIngredient={this.props.onIngredientsRemoved}
                    disableButton={disableInfo}//for ingredient
                    purchasable={this.updatePurchasable(this.props.ings)}//for order now
                    currentPrice={this.props.price}//total price
                    handle={this.modalHandler}//handling modal toggle
                ></BurgerControls>
            </Aux> : <div style={{ textAlign: 'center' }}><Spinner animation="grow" variant="warning" size="lg" style={{ width: '10rem', height: '10rem' }} /></div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientsAdded: (ingName) => dispatch(burgerBuilderActions.addIngredient(ingName)),
        onIngredientsRemoved: (ingName) => dispatch(burgerBuilderActions.removeIngredient(ingName)),
        onInitIngredients: () => dispatch(burgerBuilderActions.initIngredients()),
        onInitPurchase: () => dispatch(burgerBuilderActions.purchaseInit())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(errorHandler(burgerBuilder, axios));