import './UserAdmin.scss'
import { AiOutlineUserDelete } from 'react-icons/ai'

const UserAdmin = () => {

    const userData = [
        {
            id: 1,
            fname: 'John',
            lname: 'Doe',
            username: 'johndoe123',
            email: 'john@example.com',
            gender: 'male',
            password: 'password123',
        },
        {
            id: 2,
            fname: 'Jane',
            lname: 'Smith',
            username: 'janesmith456',
            email: 'jane@example.com',
            gender: 'female',
            password: 'secret123',
        },
        {
            id: 3,
            fname: 'Michael',
            lname: 'Johnson',
            username: 'michaelj',
            email: 'michael@example.com',
            gender: 'male',
            password: 'securepass',
        },
        {
            id: 4,
            fname: 'Emily',
            lname: 'Williams',
            username: 'emilyw',
            email: 'emily@example.com',
            gender: 'female',
            password: 'pass123',
        },
        {
            id: 5,
            fname: 'David',
            lname: 'Brown',
            username: 'davidb',
            email: 'david@example.com',
            gender: 'male',
            password: 'davidpass',
        },
        {
            id: 6,
            fname: 'Jessica',
            lname: 'Davis',
            username: 'jessicad',
            email: 'jessica@example.com',
            gender: 'female',
            password: 'jessica123',
        },
    ];

    const handleDelete = () => {

    }

    return (
        <div className="admin-container">
            <table className='user-table'>
                <thead>
                    <tr className="heading">
                        <th>UserID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>UserName</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className='user-body'>
                    {userData.map(data => (
                        <tr key={data.id} className='data'>
                            <td className='id'>{data.id}</td>
                            <td>{data.fname}</td>
                            <td>{data.lname}</td>
                            <td>{data.username}</td>
                            <td>{data.email}</td>
                            <td className='gender'>{data.gender}</td>
                            <td className='icon' onClick={handleDelete}><AiOutlineUserDelete /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}


export default UserAdmin