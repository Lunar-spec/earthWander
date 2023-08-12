/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './PopUp.scss';

const PopUp = ({ lodging, onSave, onClose }) => {
    const [editedLodging, setEditedLodging] = useState({ ...lodging });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEditedLodging((prevLodging) => ({ ...prevLodging, [name]: value }));
    };

    const handleSaveChanges = () => {
        onSave(editedLodging);
        onClose();
    };

    const validatePositiveNumber = (value) => {
        return value >= 0;
    };

    const validateLatitude = (value) => {
        return value >= -90 && value <= 90;
    };

    const validateLongitude = (value) => {
        return value >= -180 && value <= 180;
    };

    return (
        <div className="popup-container">
            <div className="popup">
                <div className="popup-header">
                    <h2>Edit Lodging</h2>
                    <button className="close-button" onClick={onClose}>
                        &times;
                    </button>
                </div>
                <div className="popup-content">
                    <div className='column'>
                        <label>Title:</label>
                        <input
                            type="text"
                            name="title"
                            value={editedLodging.title}
                            onChange={handleInputChange}
                        />
                        <label>Description:</label>
                        <textarea
                            name="description"
                            value={editedLodging.description}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='column'>
                    <label>Price:</label>
                    <input
                        type="number"
                        name="price"
                        value={editedLodging.price}
                        onChange={handleInputChange}
                        min="0"
                        step="0.01"
                    />
                    <label>Rating:</label>
                    <select
                        name="rating"
                        value={editedLodging.rating}
                        onChange={handleInputChange}
                    >
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>

                </div>
                <div className='column'>
                    <label>Number of Rooms:</label>
                    <input
                        type="number"
                        name="numRooms"
                        value={editedLodging.numRooms}
                        onChange={handleInputChange}
                        min="0"
                    />
                    <label>Room Dimensions:</label>
                    <input
                        type="text"
                        name="roomDimensions"
                        value={editedLodging.roomDimensions}
                        onChange={handleInputChange}
                    />
                </div>
                <div className='column'>
                    <label>Latitude:</label>
                    <input
                        type="number"
                        name="latitude"
                        value={editedLodging.latitude}
                        onChange={handleInputChange}
                        step="0.0001"
                        min="-90"
                        max="90"
                        className={validateLatitude(editedLodging.latitude) ? '' : 'invalid'}
                    />
                    <label>Longitude:</label>
                    <input
                        type="number"
                        name="longitude"
                        value={editedLodging.longitude}
                        onChange={handleInputChange}
                        step="0.0001"
                        min="-180"
                        max="180"
                        className={validateLongitude(editedLodging.longitude) ? '' : 'invalid'}
                    />
                    <label>Additional Information:</label>
                    <textarea
                        name="additionalInfo"
                        value={editedLodging.additionalInfo}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div className="popup-footer">
                <button className="save-button" onClick={handleSaveChanges}>
                    Save Changes
                </button>
            </div>
        </div>
        </div >
    );
};

export default PopUp;
