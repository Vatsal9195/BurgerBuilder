import { put } from 'redux-saga/effects';
import * as actions from '../actions/index';
import axios from '../../axios-order';

export function* purchaseBurger(action) {
    yield put(actions.purchaseBurgerStart());
    try {
        const response = yield axios.post('/burgerOrder/orders.json', action.orderData);
        yield put(actions.purchaseBurgerSuccess(response.data.name, action.orderData));
    } catch (error) {
        yield put(actions.purchaseBurgerFail(error));
    }
}
export function* fetchOrders(action) {
    yield put(actions.fetchOrdersStart());
    try {
        const response = yield axios.get('/burgerOrder/orders.json');
        const fetchData = [];
        for (let key in response.data) {
            fetchData.push({ ...response.data[key], id: key });
        }
        yield put(actions.fetchOrdersSuccess(fetchData));
    } catch (error) {
        yield put(actions.fetchOrdersFail(error));
    }
}
