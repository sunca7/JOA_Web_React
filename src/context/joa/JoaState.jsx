import React , { useReducer } from 'react';
import db from '../../db/index';
import JoaContext from './joaContext';
import JoaReducer from  './joaReducer';
import {
    GET_CATEGORIES,
    GET_PLACES,
    GET_PLACE,
    GET_CATEGORY,
    GET_EVENTS,
    GET_EVENT_ITEM,
    SET_LOADING
} from '../types';

const JoaState  = props  => {
    const initialState = {
        categories : [],
        category : {},
        selectedCategory : [],
        selectedPlace : {},
        places : [],
        place : {},
        events : [],
        event : {},
        loading : false
    }

    const [state, dispatch] = useReducer(JoaReducer, initialState);

    // methods

    const getCategories = async () => {
        setLoading();
        console.log("new loading 1", state.loading);
        const cagetoriesDb = [];

        await db.collection("categories")
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
            console.log(" new categories in state", cagetoriesDb);
        });

        dispatch({
            type: GET_CATEGORIES,
            payload: cagetoriesDb
        });
    };

    const getCategory = async id => {
        console.log("select category in home ", id);
        let res  = await state.places.filter(i => i.category_id === id);

        dispatch({
            type: GET_CATEGORY,
            payload: res
        });
      };

    const getPlaces = async () => {
    
        let placesDb = []; 

        db.collection("places")
            .get()
                .then(querySnapshot => {
                    querySnapshot.forEach(doc => {
                        placesDb.push(doc.data());
                    });
                });

        dispatch({
            type: GET_PLACES,
            payload: placesDb
        });

    }

    const getPlace = async id => {
        setLoading();
        let placeInfo = {};
        placeInfo = await state.places.filter(place => place.id === id);
    
        console.log("selected place ", placeInfo[0]);

        dispatch({
            type: GET_PLACE,
            payload: placeInfo[0]
        });
      };

    const getEvents = async () => {
    
        let eventsDb = []; 

        db.collection("events")
        .get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                eventsDb.push(doc.data());
                });
                console.log("events ", eventsDb);
            });

        dispatch({
            type: GET_EVENTS,
            payload: eventsDb
        });
    }

    const getEventItem = async id => {
        setLoading();
        let eventInfo = {};
        eventInfo = await state.events.filter(event => event.id === id);
        console.log("selected event ", eventInfo[0]);

        dispatch({
            type: GET_EVENT_ITEM,
            payload: eventInfo[0]
        });
      };

    const setLoading = () => dispatch({ type: SET_LOADING });

    return  <JoaContext.Provider
        value={{
            places : state.places,
            place : state.places,
            events : state.events,
            event : state.event,
            loading : state.loading,
            categories : state.categories,
            category : state.category,
            selectedCategory : state.selectedCategory,
            selectedPlace : state.selectedPlace,
            getCategories,
            getCategory,
            getPlaces,
            getPlace,
            getEvents,
            getEventItem
        }}
    >
        {props.children}
    </JoaContext.Provider>
}

export default JoaState;