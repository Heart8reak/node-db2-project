import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Cars from './Cars'

const CarLists = props => {
    const [carList, setCarList] = useState([])

    useEffect(() => {
        axios
            .get('http://localhost:5000/api/cars/')
            .then(res => {
                console.log(res)
                setCarList(res.data)
            })
            .catch(err => console.log('Error:', err))
    }, [])

    return (
        <div>
            {carList.map(carData => {
                return (
                    <Cars
                        key={carData.id}
                        VIN={carData.VIN}
                        make={carData.make}
                        model={carData.model}
                        mileage={carData.mileage}
                        transmission={carData.transmission}
                        title={carData.title}
                    />
                )
            })}
        </div>
    )
}


export default CarLists