import React, { Fragment, useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import Spinner from './layout/Spinner';

const Detail = ({ place, loading, match, getPlace }) => {

    useEffect(() => {
        getPlace(match.params.id);
        // eslint-diable-next-line
    }, [])
   
    if (!place)  return <Spinner />;
    else {
        console.log("hey 2", place);
        return (
            <Fragment>
                <h2>{place.id}</h2>
            </Fragment>
        );
    }
}

Detail.propTypes = {
    loading : PropTypes.bool,
    place: PropTypes.object.isRequired,
    getPlace: PropTypes.func.isRequired
}

export default Detail

