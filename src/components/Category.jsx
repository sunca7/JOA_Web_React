import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PlaceItem from './PlaceItem'

class Category extends Component {

    render () {

        const categoryStyle = {
            display: "grid",
            gridTemplateColumns: "1fr 1fr"
          }

        return (
            <div
                className="category-container"
                style={categoryStyle}>
                {this.props.categoryItems.map(item => (
                <PlaceItem
                    key = {item.id}
                    place={item}
                    selectPlace={this.props.selectPlace}
                />
                ))}
            </div>
        )
    }
}

Category.propTypes = {

}

export default Category

