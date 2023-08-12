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
                        <th className='user-data'>UserID</th>
                        <th className='user-data'>First Name</th>
                        <th className='user-data'>Last Name</th>
                        <th className='user-data'>UserName</th>
                        <th className='user-data'>Email</th>
                        <th className='user-data'>Gender</th>
                        <th className='user-data'>Action</th>
                    </tr>
                </thead>
                <tbody className='user-body'>
                    {userData.map(data => (
                        <tr key={data.id} className='data'>
                            <td className='user-data'>{data.id}</td>
                            <td className='user-data'>{data.fname}</td>
                            <td className='user-data'>{data.lname}</td>
                            <td className='user-data'>{data.username}</td>
                            <td className='user-data'>{data.email}</td>
                            <td className='user-data gender'>{data.gender}</td>
                            <td className='user-data icon' onClick={handleDelete}><AiOutlineUserDelete /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}


export default UserAdmin