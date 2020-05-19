import React, { useEffect, useState, useContext } from 'react'
import PlaceItem from './PlaceItem'
import GoogleMaps from './GoogleMaps'
import JoaContext from '../context/joa/joaContext';
import Spinner from './layout/Spinner';

const Category = ({ match }) => {
    const joaContext = useContext(JoaContext);
    const { getCategory, selectedCategory, loading } = joaContext;

    useEffect(() => {
        getCategory(match.params.id);
        // eslint-diable-next-line
    }, [])

    if (loading)  return <Spinner />;
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

