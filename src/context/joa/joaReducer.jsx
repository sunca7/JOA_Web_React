import {
    GET_CATEGORIES,
    GET_CATEGORY,
    GET_EVENTS,
    GET_EVENTS_ITEM,
    GET_PLACES,
    GET_PLACE_ITEM,
    SET_LOADING
} from '../types';

export default (state, action) => {
    switch(action.type) {
        case GET_CATEGORIES: 
            return {
                ...state,
                categories: action.payload,
                loading: false
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        default :
            return state;
    }
}