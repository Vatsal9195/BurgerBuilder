import * as actionTypes from '../actions/actionTypes';
import { takeEvery } from 'redux-saga/effects';

import { initIngredientsSaga } from './burgerBuilder';
import { purchaseBurger, fetchOrders } from './order';

export function* watchBurgerBuilder() {
    yield takeEvery(actionTypes.INIT_INGREDIENTS, initIngredientsSaga);
}

export function* watchOrder() {
    yield takeEvery(actionTypes.PURCHASE_BURGER, purchaseBurger);
    yield takeEvery(actionTypes.FETCH_ORDERS, fetchOrders);
}