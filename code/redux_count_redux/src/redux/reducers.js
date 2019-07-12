/*
    N个reducers函数的模块
 */
import {INCREMENT, DECREMENT} from "./action-types";

export function counter(state = 0, action) {
    console.log('counter', state, action);
    switch (action.type) {
        case INCREMENT:
            return parseInt(state) + parseInt(action.data);
        case DECREMENT:
            return parseInt(state) - parseInt(action.data);
        default:
            return state;
    }
}
