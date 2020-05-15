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

    const categoryStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto'
        }

    const mapStyle = {
        height: '450px',
        maxWidth: '992px',
        width: '100%',
        marginLeft : 'auto',
        marginRight : 'auto',
        marginTop : '50px'
    }

    return (
        <div
            className="category-container">
            <div style={mapStyle}> 
                <GoogleMaps mapItems={selectedCategory}/>
            </div>
            <div
                style={categoryStyle}>
                {selectedCategory.map(item => (
                <PlaceItem
                    key = {item.id}
                    place={item}
                />
                ))}
            </div>
        </div>
    )
}

export default Category

