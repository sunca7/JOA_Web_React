import React , { useReducer } from 'react';
import { db } from '../../db/index';
import { collection, query, where, getDocs } from "firebase/firestore";
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
        const q = query(collection(db, "categories"));
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => (
            cagetoriesDb.push({
                id: doc.id,
                name: doc.data().name,
                order: doc.data().order,
                picture: doc.data().picture,
                type : doc.data().type
                })
        ));

        dispatch({
            type: GET_CATEGORIES,
            payload: cagetoriesDb
        });
    };

    const getCategory = async name => {
        setLoading();
        
        let categoryId = null;
        if (name === 'Lifestyle') {
            categoryId = 'MWk6mgDk6mwo1OXfp5tK';
        } else if (name === 'Restaurants') {
            categoryId = 'cblvLqLmtAJkHOZMWJWE';
        } else if (name === 'Groceries') {
            categoryId = 'e8neDA29Y09eQEyvlZ1N';
        }
        
        let placesDb = [];
        const placesQ = query(collection(db, "places"));
        const placesQuerySnapshot = await getDocs(placesQ);

        placesQuerySnapshot.forEach(doc => {
            placesDb.push(doc.data());
        });

        let res  = placesDb.filter(i => i.category_id === categoryId);

        dispatch({
            type: GET_CATEGORY,
            payload: res
        });
      };

    const getPlaces = async () => {
    
        let placesDb = []; 
        const placesQ = query(collection(db, "places"));
        const placesQuerySnapshot = await getDocs(placesQ);

        placesQuerySnapshot.forEach(doc => {
            placesDb.push(doc.data());
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

        const placesQ = query(collection(db, "places"));
        const placesQuerySnapshot = await getDocs(placesQ);

        placesQuerySnapshot.forEach(doc => {
            placesDb.push(doc.data());
        });

        placeInfo = placesDb.filter(place => place.id === id);
                
        selected = placeInfo[0];
    
        if (selected && (selected.secondary_pictures.length > 0 || selected.menu.length > 0))
            newPhotos.push(selected.picture);

        if (selected && selected.secondary_pictures.length > 0) {
            newPhotos = newPhotos.concat(selected.secondary_pictures);
        }

        if (selected && selected.menu.length > 0) {
            newPhotos = newPhotos.concat(selected.menu);
        }

        if (selected && (selected.secondary_pictures.length > 0 || selected.menu.length > 0))
            selected["newPhotos"] = newPhotos;

        dispatch({
            type: GET_PLACE,
            payload: selected
        });
      };

    // Events
    const getEvents = async () => {
        setLoading();

        let eventsDb = [];
        const eventsQ = query(collection(db, "events"));
        const eventsQuerySnapshot = await getDocs(eventsQ);

        eventsQuerySnapshot.forEach(doc => {
            eventsDb.push(doc.data());
            }
        );

        dispatch({
            type: GET_EVENTS,
            payload: eventsDb
        });
    }

    const getEventItem = async id => {
        setLoading();

        let eventInfo = {};
        let eventsDb = []; 

        const eventsQ = query(collection(db, "events"));
        const eventsQuerySnapshot = await getDocs(eventsQ);

        eventsQuerySnapshot.forEach(doc => {
                eventsDb.push(doc.data());
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