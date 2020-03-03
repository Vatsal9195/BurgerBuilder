import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from '../../../axios-order';

import './ContactData.css';
import { Card, Form, Spinner } from 'react-bootstrap';
import errorHandler from '../../../hoc/ErrorHandler/ErrorHandler';
import * as actions from '../../../store/actions/index';

class contactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            country: '',
            city: '',
            pincode: ''
        }
    }

    orderHandler = (event) => {
        //alert('hello, Thanks for Shopping!');
        event.preventDefault();
        const order = {
            ingredients: this.props.ings,
            price: this.props.price,
            customer: {
                name: this.state.name,
                address: {
                    country: this.state.address.country,
                    city: this.state.address.city,
                    pinCode: this.state.address.pincode
                },
                email: this.state.email
            }
        }

        this.props.onBurgerOrdered(order);

    }

    render() {
        return (
            <div className="ContactData">
                {this.props.checkoutLoading ? <Card>
                    <Card.Body>
                        <Card.Title style={{ textAlign: 'center' }}>
                            Enter Your Contact Data
                        </Card.Title>
                        <Form onSubmit={this.orderHandler}>
                            <Form.Group controlId="formBasicName">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Full Name" required
                                    onChange={e => this.setState({ name: e.target.value })} />
                                <Form.Control.Feedback type="invalid">
                                    Please choose a valid name.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter Email" required
                                    onChange={e => this.setState({ email: e.target.value })} />
                                <Form.Control.Feedback type="invalid">
                                    Please choose a valid email.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group>
                                <button type="submit" className="btn btn-success">Submit</button>
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card> : <div style={{ textAlign: "center" }}> <Spinner animation="border" variant="success" style={{ width: '6rem', height: '6rem' }} /></div>}

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        checkoutLoading: state.order.checkoutLoading,
        error: state.order.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onBurgerOrdered: orderData => dispatch(actions.purchaseBurger(orderData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(errorHandler(contactData, axios));