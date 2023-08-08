/* eslint-disable react/prop-types */
import Map, { Marker, Popup, NavigationControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import getCenter from 'geolib/es/getCenter';
import { useState } from 'react';

import './SideMap.scss'

const SideMap = ({ lodgingsData }) => {
    const key = import.meta.env.VITE_MAPBOX_KEY

    const [selectedLocation, setSelectedLocation] = useState({})

    // console.log(lodgingsData)
    const coordinates = lodgingsData.map(result => ({
        longitude: result.longitude,
        latitude: result.latitude
    }))

    // console.log(coordinates)

    const center = getCenter(coordinates)

    const [viewport] = useState({
        longitude: center.longitude,
        latitude: center.latitude,
        zoom: 3.5,
    })


    // console.log(center)
    console.log(selectedLocation)


    return (
        <div>
            <Map
                mapboxAccessToken={key}
                initialViewState={viewport}
                style={{ width: '100%', height: '1024px' }}
                mapStyle="mapbox://styles/manjeshs12/cll14783100a701pl3e7a7hk1"
                doubleClickZoom={false}
            >

                <NavigationControl />
                {lodgingsData.map(result => (
                    <div key={result.longitude}>
                        <Marker
                            longitude={result.longitude}
                            latitude={result.latitude} anchor="bottom"
                            style={{ cursor: 'pointer' }}
                            onClick={() => setSelectedLocation(result)}
                            color='#92e3a9'
                        />

                        {selectedLocation.id === result.id && (
                            <Popup
                                onClose={() => setSelectedLocation({})}
                                anchor="top"
                                closeOnClick={false}
                                closeOnMove={true}
                                closeButton={true}
                                latitude={result.latitude}
                                longitude={result.longitude}
                            >
                                {result.title}
                            </Popup>
                        )
                        }
                    </div>
                ))}


            </Map>
        </div>
    )
}

export default SideMap