import React, { useEffect, useState, useContext } from 'react'
import PlaceItem from './PlaceItem'
import GoogleMaps from './GoogleMaps'
import JoaContext from '../context/joa/joaContext';

const Category = () => {
    const joaContext = useContext(JoaContext);

    const { getPlaces, selectedCategory } = joaContext;

      useEffect(() => {
        getPlaces();
        // eslint-diable-next-line
    }, [])

    return (
        <div className="category-container">
            <div className='map-container'> 
                <GoogleMaps mapItems={selectedCategory}/>
            </div>
            <div className='category-grid'>
                {selectedCategory.map(item => (
                <PlaceItem
                    key = {item.id}
                    place={item} />))}
            </div>
        </div>
    )
}

export default Category

