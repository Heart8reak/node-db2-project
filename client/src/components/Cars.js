import React from 'react'

const Cars = props => {
    return (
        <div>
            <hr />
            <h3>VIN:</h3>
            {props.VIN}
            <h3>Make:</h3>
            {props.make}
            <h3>Model:</h3>
            {props.model}
            <h3>Mileage:</h3>
            {props.mileage}
            <h4>Transmission:</h4>
            {props.transmission}
            <h4>Title:</h4>
            {props.title}
            <hr />
        </div>
    )
}
export default Cars