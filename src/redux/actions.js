/*
增加
 */
import {DECREMENT, INCREMENT} from "./action-types";

export const increment = number => ({type: INCREMENT, data: number});
export const decrement = number => ({type: DECREMENT, data: number});
export const incrementSync = number => {
    return dispatch => {
        setTimeout(() => {
            dispatch(increment(number))
        }, 1000)
    }
};
