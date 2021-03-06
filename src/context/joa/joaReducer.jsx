import {
    GET_CATEGORIES,
    GET_CATEGORY,
    GET_EVENTS,
    GET_EVENT_ITEM,
    GET_PLACES,
    GET_PLACE,
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
        case GET_CATEGORY: 
            return {
                ...state,
                selectedCategory: action.payload,
                loading: false
            };
        case GET_PLACES: 
            return {
                ...state,
                places: action.payload,
            };
        case GET_PLACE: 
            return {
                ...state,
                selectedPlace: action.payload,
                loading: false
            };
        case GET_EVENTS: 
            return {
                ...state,
                events: action.payload,
                loading: false
            };
        case GET_EVENT_ITEM: 
            return {
                ...state,
                event: action.payload,
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