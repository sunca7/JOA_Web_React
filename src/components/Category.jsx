import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import PlaceItem from './PlaceItem'
import GoogleMaps from './GoogleMaps'

class Category extends Component {

    render () {

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
                    <GoogleMaps mapItems={this.props.categoryItems}/>
                </div>
                <div
                    style={categoryStyle}>
                    {this.props.categoryItems.map(item => (
                    <PlaceItem
                        key = {item.id}
                        place={item}
                    />
                    ))}
                </div>
            </div>
        )
    }
}

Category.propTypes = {

}

export default Category

