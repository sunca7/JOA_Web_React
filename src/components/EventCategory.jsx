import React from 'react'
import PlaceItem from './PlaceItem'

const EventCategory = (props) => {
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
            className="event-category-container">
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

export default EventCategory
