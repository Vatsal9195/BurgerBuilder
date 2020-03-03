import React, { Component } from 'react';
import Aux from '../Aux';
import Modal from 'react-bootstrap/Modal';

const errorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }
        UNSAFE_componentWillMount() {
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({ error: null });
                return req;
            });
            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({ error: error });
            });
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        errorModalHandler = () => {
            this.setState({ error: null });
        }

        render() {
            return (
                <Aux>
                    <Modal show={this.state.error} onHide={this.errorModalHandler} centered>
                        <Modal.Header style={{color: 'red'}} closeButton>
                            <Modal.Title>Error!</Modal.Title>
                        </Modal.Header>
                        <Modal.Body style={{color: '#f64b3c'}}>Something went wrong!</Modal.Body>
                    </Modal>

                    <WrappedComponent {...this.props}></WrappedComponent>
                </Aux>

            )
        }
    }
}

export default errorHandler;