import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Route, Redirect } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class checkout extends Component {

    checkoutCancelHandler = () => {
        this.props.history.replace('/');
    }

    checkoutContinueHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        const purchasedRedirect = this.props.purchased ? <Redirect to="/" /> : null;
        return (this.props.ings ?
            <div style={{ textAlign: 'center' }}>
                {purchasedRedirect}
                <CheckoutSummary
                    ingredients={this.props.ings}
                    checkoutCancel={() => this.checkoutCancelHandler()}
                    checkoutContinue={() => this.checkoutContinueHandler()}
                    totalPrice={this.props.price}></CheckoutSummary>
                <Route path={this.props.match.path + '/contact-data'}
                    component={ContactData}></Route>
            </div> : <Redirect to="/" />);
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        purchased: state.order.purchased
    }
}

export default connect(mapStateToProps)(checkout);