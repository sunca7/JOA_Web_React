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

    // [Methods]

    // Categories & Places
    const getCategories = async () => {
        setLoading();

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
        });

        dispatch({
            type: GET_CATEGORIES,
            payload: cagetoriesDb
        });
    };

    const getCategory = async id => {
        setLoading();

        let placesDb = []; 
        await db.collection("places")
            .get()
                .then(querySnapshot => {
                    querySnapshot.forEach(doc => {
                        placesDb.push(doc.data());
                    });
                });
        
        let res  = placesDb.filter(i => i.category_id === id);

        dispatch({
            type: GET_CATEGORY,
            payload: res
        });
      };

    const getPlaces = async () => {
    
        let placesDb = []; 
        await db.collection("places")
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

        let placeInfo = [];
        let placesDb = [];
        let selected = [];
        let newPhotos = []; 
        await db.collection("places")
            .get()
                .then(querySnapshot => {
                    querySnapshot.forEach(doc => {
                        placesDb.push(doc.data());
                    });
                });

        placeInfo = placesDb.filter(place => place.id === id);
                
        selected = placeInfo[0];

        if (selected && selected.secondary_pictures.length > 0) {
            newPhotos.push(selected.picture);
            newPhotos = newPhotos.concat(selected.secondary_pictures);
            selected["newPhotos"] = newPhotos;
        }

        dispatch({
            type: GET_PLACE,
            payload: selected
        });
      };

    // Events
    const getEvents = async () => {
        setLoading();

        let eventsDb = []; 
        await db.collection("events")
        .get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                eventsDb.push(doc.data());
                });
            });

        dispatch({
            type: GET_EVENTS,
            payload: eventsDb
        });
    }

    const getEventItem = async id => {
        setLoading();

        let eventInfo = {};
        let eventsDb = []; 
        await db.collection("events")
        .get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                eventsDb.push(doc.data());
                });
            });

        eventInfo = eventsDb.filter(event => event.id === id);

        dispatch({
            type: GET_EVENT_ITEM,
            payload: eventInfo[0]
        });
      };

    // Loading
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