/* eslint-disable react/prop-types */
import { useState } from 'react';
import './PopUp.scss';

const PopUp = ({ lodging, onClose, onSave }) => {
    const [editedLodging, setEditedLodging] = useState({ ...lodging });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEditedLodging((prevLodging) => ({ ...prevLodging, [name]: value }));
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
                        <input
                            type="text"
                            name="title"
                            value={editedLodging.title}
                            onChange={handleInputChange}
                            placeholder='Title'
                        />
                        <input
                            type="number"
                            name="price"
                            value={editedLodging.price}
                            onChange={handleInputChange}
                            min="0"
                            step="0.01"
                            placeholder='Price'
                            className={validatePositiveNumber(editedLodging.price) ? '' : 'invalid'}
                        />
                    </div>
                    <div className="rating">
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
                    <textarea
                        name="description"
                        value={editedLodging.description}
                        onChange={handleInputChange}
                        placeholder='Description'
                    />
                    <div className='column'>
                        <input
                            type="number"
                            name="numRooms"
                            value={editedLodging.numRooms}
                            onChange={handleInputChange}
                            min="0"
                            placeholder='Number of Rooms'
                        />
                        <input
                            type="text"
                            name="roomDimensions"
                            value={editedLodging.roomDimensions}
                            onChange={handleInputChange}
                            placeholder='Room Dimensions'
                        />
                    </div>
                    <div className='column'>
                        <input
                            type="number"
                            name="latitude"
                            value={editedLodging.latitude}
                            onChange={handleInputChange}
                            step="0.0001"
                            min="-90"
                            max="90"
                            placeholder='Latitude'
                            className={validateLatitude(editedLodging.latitude) ? '' : 'invalid'}
                        />
                        <input
                            type="number"
                            name="longitude"
                            value={editedLodging.longitude}
                            onChange={handleInputChange}
                            step="0.0001"
                            min="-180"
                            max="180"
                            placeholder='Longitude'
                            className={validateLongitude(editedLodging.longitude) ? '' : 'invalid'}
                        />
                    </div>
                    <textarea
                        name="additionalInfo"
                        value={editedLodging.additionalInfo}
                        onChange={handleInputChange}
                        placeholder='Additional Information'
                    />
                </div>
                <div className="popup-footer">
                    <button className="save-button" onClick={() => onSave(editedLodging)}>
                        Save Changes
                    </button>
                </div>
            </div>
        </div >
    );
};

export default PopUp;
