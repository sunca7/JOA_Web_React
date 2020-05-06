import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import PlaceItem from './PlaceItem'
import GoogleMaps from './GoogleMaps'

class Category extends Component {

    render () {

        const categoryStyle = {
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            width: '50%'
          }

        return (
            <div
                className="category-container">
                <div>
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

