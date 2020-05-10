import React , { useReducer } from 'react';
import db from '../../db/index';
import joaContext from './joaContext';
import joaReducer from  './joaReducer';
import {
    GET_CATEGORY,
    GET_EVENTS,
    GET_EVENTS_ITEM,
    GET_PLACES,
    GET_PLACE_ITEM,
    SET_LOADING
} from '../types';

const JoaState  = props  => {
    const initialState = {
        places : [],
        place : {},
        events : [],
        event : {},
        loading : false
    }

    const [state, dispatch] = useReducer(joaReducer, initialState);

    // methods

    return  <joaContext.Provider
        value={{
            places : state.places,
            place : state.places,
            events : state.events,
            event : state.event,
            loading : state.loading
        }}
    >
        {props.childeren}
    </joaContext.Provider>
}

export default JoaState;