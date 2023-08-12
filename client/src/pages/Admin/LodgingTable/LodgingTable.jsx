import { useState } from 'react';
import './LodgingTable.scss'
import { MdDeleteForever, MdEdit } from 'react-icons/md'
import PopUp from '../../../components/PopUp/PopUp';

const LodgingTable = () => {

    const [open, setOpen] = useState(true)

    const lodgingsData = [
        {
            id: 1,
            title: 'Cozy Eco Cottage',
            description: 'Experience the tranquility of nature in this cozy eco-friendly cottage.',
            price: '$100',
            rating: 4,
            image: 'https://images.pexels.com/photos/5875837/pexels-photo-5875837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            reviews: [
                'Great place to stay! Loved the eco-friendly atmosphere.',
                'The cottage was very comfortable and clean.',
                'Beautiful surroundings and friendly staff.',
            ],
            numRooms: 2,
            roomDimensions: '20 sq. m each',
            additionalInfo: 'Pets allowed, Free Wi-Fi',
            latitude: 47.5162,
            longitude: 14.5501,
            images: [
                'https://source.unsplash.com/random/?cottage,forest,cozy',
                'https://source.unsplash.com/random/?cottage,cozy,pets',
                'https://source.unsplash.com/random/?cottage,cozy,fireplace,interiors',
                'https://source.unsplash.com/random/?cottage,cozy,wood,interiors',
            ],
        },
        {
            id: 2,
            title: 'Sustainable Treehouse Retreat',
            description: 'Stay in a unique treehouse surrounded by lush greenery and enjoy a sustainable living experience.',
            price: '$150',
            rating: 3,
            image: 'https://images.pexels.com/photos/4509002/pexels-photo-4509002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            reviews: [
                'Great place to stay! Loved the eco-friendly atmosphere.',
                'The cottage was very comfortable and clean.',
                'Beautiful surroundings and friendly staff.',
            ],
            numRooms: 1,
            roomDimensions: '25 sq. m',
            additionalInfo: 'No pets allowed, Breakfast included',
            latitude: 51.653,
            longitude: -0.4015,
            images: [
                'https://source.unsplash.com/random/?treehouse,forest',
                'https://source.unsplash.com/random/?treehouse,interiors',
                'https://source.unsplash.com/random/?treehouse,cozy,interiors,bench',
                'https://source.unsplash.com/random/?treehouse,wine,breakfast,interiors',
            ],
        },
        {
            id: 3,
            title: 'Earth-Friendly Beach House',
            description: 'Relax on the beautiful beach and embrace the eco-friendly amenities of this beach house.',
            price: '$200',
            rating: 2,
            image: 'https://images.pexels.com/photos/7061662/pexels-photo-7061662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            reviews: [
                'Great place to stay! Loved the eco-friendly atmosphere.',
                'The cottage was very comfortable and clean.',
                'Beautiful surroundings and friendly staff.',
            ],
            numRooms: 3,
            roomDimensions: '30 sq. m each',
            additionalInfo: 'Private beach access, Yoga classes',
            latitude: 37.4284,
            longitude: -8.6714,
            images: [
                'https://source.unsplash.com/random/?beach,eco,cozy',
                'https://source.unsplash.com/random/?beach,cozy,pets',
                'https://source.unsplash.com/random/?beach,cozy,cool,balcony',
                'https://source.unsplash.com/random/?beach,house,cozy,window',
            ],
        },
        {
            id: 4,
            title: 'Organic Farmstay Retreat',
            description: 'Immerse yourself in the organic farm life and savor farm-to-table meals during your stay.',
            price: '$120',
            rating: 4,
            image: 'https://images.pexels.com/photos/7174115/pexels-photo-7174115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            reviews: [
                'Great place to stay! Loved the eco-friendly atmosphere.',
                'The cottage was very comfortable and clean.',
                'Beautiful surroundings and friendly staff.',
            ],
            numRooms: 4,
            roomDimensions: '15 sq. m each',
            additionalInfo: 'Farm tours, Cooking workshops',
            latitude: 49.3964,
            longitude: 11.0495,
            images: [
                'https://source.unsplash.com/random/?farmstay,eco,organic',
                'https://source.unsplash.com/random/?farmstay,eco,organic,tour',
                'https://source.unsplash.com/random/?farmstay,eco,organic,cooking,workshop',
                'https://source.unsplash.com/random/?farmstay,eco,organic,animals',
            ],
        },
    ];

    // const file = document.querySelector('#file');
    // file.addEventListener('change', (e) => {
    //     // Get the selected file
    //     const [file] = e.target.files;
    //     // Get the file name and size
    //     const { name: fileName, size } = file;
    //     // Convert size in bytes to kilo bytes
    //     const fileSize = (size / 1000).toFixed(2);
    //     // Set the text content
    //     const fileNameAndSize = `${fileName} - ${fileSize}KB`;
    //     document.querySelector('.file-name').textContent = fileNameAndSize;
    // });

    // const handleImageChange = (lodgingId, imageIndex, event) => {
    //     const newLodgingsData = lodgingsData.map(lodging => {
    //         if (lodging.id === lodgingId) {
    //             const newImages = [...lodging.images];
    //             newImages[imageIndex] = URL.createObjectURL(event.target.files[0]);
    //             return { ...lodging, images: newImages };
    //         }
    //         return lodging;
    //     });

    //     // Update the lodgingsData state with new images
    //     // setLodgingsData(newLodgingsData);
    // };

    return (
        <div className='lodging-container'>
            <table className="lodging-table">
                <thead>
                    <tr className="heading">
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Rating</th>
                        <th>Main Image</th>
                        <th>Reviews</th>
                        <th>Number of Rooms</th>
                        <th>Room Dimensions</th>
                        <th>Additional Information</th>
                        <th>Latitude</th>
                        <th>Longitude</th>
                        <th>Images</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className='lodging-data'>
                    {lodgingsData.map(data => (
                        <tr key={data.id} className='data'>
                            <td>{data.id}</td>
                            <td>{data.title}</td>
                            <td>{data.description}</td>
                            <td>{data.price}</td>
                            <td>{data.rating}</td>
                            <td><img src={data.image} alt="Lodging" /></td>
                            <td>
                                <ul>
                                    {data.reviews.map((review, index) => (
                                        <li key={index}>{review}</li>
                                    ))}
                                </ul>
                            </td>
                            <td>{data.numRooms}</td>
                            <td>{data.roomDimensions}</td>
                            <td>{data.additionalInfo}</td>
                            <td>{data.latitude}</td>
                            <td>{data.longitude}</td>
                            <td>
                                <ul>
                                    {data.images.map((image, index) => (
                                        <li key={index}>
                                            <img src={image} alt={`Image ${index + 1}`} />
                                        </li>
                                    ))}
                                </ul>
                            </td>
                            <td className='icons'><MdEdit className='edit' /> <MdDeleteForever className='delete' /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <PopUp />
            </div>
        </div >
    );
};

export default LodgingTable