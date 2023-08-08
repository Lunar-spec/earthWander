import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ImStarFull } from 'react-icons/im'

import './Lodging.scss'
import SideMap from '../../components/SideMap/SideMap'


const Lodging = () => {
  const [filterOpen, setFilterOpen] = useState(false)
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


  const handleFilter = () => {
    setFilterOpen(!filterOpen);
  }

  return (
    <div className="lodging">
      <div className="filters">
        <button className="filter-button" onClick={handleFilter}>Filter</button>

        {filterOpen && (
          <>
            <div className="title">Apply filters:</div>
            <div className="filter-price"></div>
          </>
        )}

      </div>
      <div className="main-list">
        {lodgingsData.map((lodging, index) => (
          <>
            <div className="lodging-card" key={index}>
              <Link to={`/lodging/${lodging.id}`}>
                <div className="image-container">
                  <img src={lodging.image} alt={lodging.title} />
                </div>
                <div className="content">
                  <h3>{lodging.title}</h3>
                  <p>{lodging.description.substring(0, 37)}{lodging.description.length > 37 ? "..." : ""}</p>
                  <p>Price: {lodging.price}</p>
                  <div className="rating">
                    {Array(lodging.rating).fill(<ImStarFull className="star" key={lodging.id} />)}
                  </div>
                  {/* <p>{lodging.reviews} Reviews</p> */}
                </div>
              </Link>
            </div>
          </>
        ))}
      </div>
      <div className="map">
        <SideMap lodgingsData={lodgingsData} />
      </div>
    </div>
  )
}

export default Lodging