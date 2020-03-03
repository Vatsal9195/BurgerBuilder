import React, { Component } from 'react';
import { connect } from 'react-redux';

import Order from '../../components/Order/Order';
import axios from '../../axios-order';
import errorHandler from '../../hoc/ErrorHandler/ErrorHandler';
import { Spinner } from 'react-bootstrap';
import * as orderAction from '../../store/actions/index';

class Orders extends Component {

    componentDidMount() {
        //console.log(this.props.orders);  
        this.props.onOrderFetch();
    }

    render() {
        const order = this.props.orders.slice(0).reverse().map(res => {
            return <Order
                key={res.id}
                id={res.id}
                ingredients={res.ingredients}
                price={res.price} />
        });
        return (this.props.orderLoading ?
            <div>
                {order}
            </div> : <div style={{ textAlign: 'center' }}>
                <Spinner animation="border" variant="success" size="lg" style={{ width: '10rem', height: '10rem' }} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        orderLoading: state.order.orderLoading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onOrderFetch: () => dispatch(orderAction.fetchOrders())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(errorHandler(Orders, axios));