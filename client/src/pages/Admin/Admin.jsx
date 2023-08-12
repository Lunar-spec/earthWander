import './Admin.scss';
import { useState } from 'react';
import { FaUser, FaHotel } from 'react-icons/fa'; // Import appropriate icons
import LodgingTable from './LodgingTable/LodgingTable';
import UserAdmin from './UserAdmin/UserAdmin';

const Admin = () => {
    const [selectedOption, setSelectedOption] = useState('user'); // Default to 'user'

    return (
        <div className="admin-container">
            <div className="sidebar-container">
                <div className="sidebar">
                    <div className="user-icon" onClick={() => setSelectedOption('user')}>
                        <FaUser />
                    </div>
                    <div className="lodging-icon" onClick={() => setSelectedOption('lodging')}>
                        <FaHotel />
                    </div>
                </div>
                <div className="content">
                    {selectedOption === 'user' ? <UserAdmin /> : <LodgingTable />}
                </div>
            </div>
        </div>
    );
};

export default Admin;
