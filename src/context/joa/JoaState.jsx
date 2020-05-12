import React , { useReducer } from 'react';
import db from '../../db/index';
import joaContext from './joaContext';
import joaReducer from  './joaReducer';
import {
    GET_CATEGORIES,
    GET_CATEGORY,
    GET_EVENTS,
    GET_EVENTS_ITEM,
    GET_PLACES,
    GET_PLACE_ITEM,
    SET_LOADING
} from '../types';

const JoaState  = props  => {
    const initialState = {
        categories : [],
        places : [],
        place : {},
        events : [],
        event : {},
        loading : false
    }

    const [state, dispatch] = useReducer(joaReducer, initialState);

    // methods
    const getCategories = () => {
        setLoading();

        const cagetoriesDb = [];

        db.collection("categories")
        .get()
            .then(querySnapshot => {
                querySnapshot.forEach((doc) => (
                cagetoriesDb.push({
                    id: doc.id,
                    name: doc.data().name,
                    order: doc.data().order,
                    picture: doc.data().picture,
                    type : doc.data().type
                })
            ));
        });
        console.log(" new categories ", cagetoriesDb);

        dispatch({
            type: GET_CATEGORIES,
            payload: cagetoriesDb
        });
    };

    const setLoading = () => dispatch({ type: SET_LOADING });

    return  <joaContext.Provider
        value={{
            places : state.places,
            place : state.places,
            events : state.events,
            event : state.event,
            loading : state.loading,
            getCategories
        }}
    >
        {props.children}
    </joaContext.Provider>
}

export default JoaState;