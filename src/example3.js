import React, {useEffect, useState} from 'react'

 function useCoordenades(){
    const [coordenades, setCoordenades] = useState({
        latitude: null,
        longitude: null
    })
    let geoId;

    useEffect(() => {
        geoId = window.navigator.geolocation.watchPosition(position => {
            setCoordenades({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude 
            })
        })

        return () => {
            navigator.geolocation.clearWatch(geoId)
        }

    })

    return coordenades

}

export default function Coordenades() {
    const coordenades = useCoordenades()

    return coordenades.latitude == null ? (
        <div>Loading...</div>
    ) : (
        <div>
            <div> Latitude: {coordenades.latitude} </div>
            <div> Longitude: {coordenades.longitude} </div>
        </div>
    )
} 

 class Coordenadas extends React.Component {
    state = {
        latitud: null,
        longitud: null
    }

    render(){
        return this.state.latitud == null ? (
            <div>Loading...</div>
        ) : (
            <div>
                <h2>Latitude: {this.state.latitud}</h2>
                <h2>Longitude: {this.state.longitud}</h2>
            </div>
        )
    }

    componentDidMount() {
        this.geoId = window.navigator.geolocation.watchPosition(position => {
            this.setState({
                latitud: position.coords.latitude,
                longitud: position.coords.longitude
            })
        })
    }

    componentWillMount() {
        navigator.geolocation.clearWatch(this.geoId)
    }



}
