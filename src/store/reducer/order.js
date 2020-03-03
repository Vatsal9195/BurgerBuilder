import * as actionTypes from '../actions/actionTypes';

const initialState = {
    orders: [],
    checkoutLoading: true,
    purchased: false,
    orderLoading: false,
    error: null
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.PURCHASE_BURGER_START:
            return{
                ...state,
                checkoutLoading: false
            };
        case actionTypes.PURCHASE_BURGER_SUCCESS:
            const newOrder ={
                ...action.orderData,
                id: action.id
            }
            return{
                ...state,
                checkoutLoading: true,
                orders: state.orders.concat(newOrder),
                purchased: true
            };
        case actionTypes.PURCHASE_BURGER_FAIL:
            return{
                ...state,
                checkoutLoading: true,
                error: action.error
            };
        case actionTypes.PURCHASE_INIT:
            return{
                ...state,
                purchased: false
            }
        case actionTypes.FETCH_ORDERS_START:
            return{
                ...state,
                orderLoading: true
            }
        case actionTypes.FETCH_ORDERS_FAIL:
            return{
                ...state,
                orderLoading: false
            }
        case actionTypes.FETCH_ORDERS_SUCCESS:
            return{
                ...state,
                orders: action.orderData,
                orderLoading: true
            }
        default:
            return state;
    }
}

export default reducer;