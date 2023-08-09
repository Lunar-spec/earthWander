import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ImStarFull } from 'react-icons/im'
import { FcFilledFilter, FcEmptyFilter } from 'react-icons/fc'

import './Lodging.scss'
import SideMap from '../../components/SideMap/SideMap'


const Lodging = () => {
  const [filterOpen, setFilterOpen] = useState(false)
  const [priceFilter, setPriceFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

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

  const handleApplyFilters = () => {
    setFilterOpen(false);
  };

  const filteredLodgings = lodgingsData
    .filter(lodging => {
      if (priceFilter === 'lower') {
        return parseFloat(lodging.price.substring(1)) < 150;
      } else if (priceFilter === 'higher') {
        return parseFloat(lodging.price.substring(1)) >= 150;
      }
      return true;
    })
    .filter(lodging => {
      if (ratingFilter === 'lower') {
        return lodging.rating < 3;
      } else if (ratingFilter === 'higher') {
        return lodging.rating >= 3;
      }
      return true;
    });

  const handleResetFilters = () => {
    setPriceFilter('')
    setRatingFilter('')
    setFilterOpen(false)
  }


  return (
    <div className={`lodging ${filterOpen ? 'filter-open' : ''}`}>
      <div className="filters">
        <button className="filter-button" onClick={handleFilter}>
          <FcFilledFilter />
        </button>
        {filterOpen && (
          <div className="filter-container">
            <div className="filter-button-close" onClick={handleFilter}>
              <FcEmptyFilter />
            </div>
            <div className="filter-content">
              <div className="filter-group">
                <p>Price:</p>
                <input
                  type="radio"
                  value="lower"
                  name="price" checked={priceFilter === 'lower'}
                  onChange={() => setPriceFilter('lower')}
                />
                Low
                <input
                  type="radio"
                  value="higher"
                  name="price"
                  checked={priceFilter === 'higher'}
                  onChange={() => setPriceFilter('higher')}
                />
                High
              </div>
              <div className="filter-group">
                <p>Rating:</p>
                <input
                  type="radio"
                  value="lower"
                  name="rating"
                  checked={ratingFilter === 'lower'}
                  onChange={() => setRatingFilter('lower')}
                />
                Low
                <input
                  type="radio"
                  value="higher"
                  name="rating"
                  checked={ratingFilter === 'higher'}
                  onChange={() => setRatingFilter('higher')}
                />
                High
              </div>
              <div className="button-group">
                <button className="apply-filters-button" onClick={handleApplyFilters}>
                  Apply Filters
                </button>
                <button className='reset-filters-button' onClick={handleResetFilters}>
                  Reset Filters
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="main-list">
        {filteredLodgings.map((lodging, index) => (
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
                    {Array.from({ length: lodging.rating }).map((_, index) => (
                      <ImStarFull className="star" key={index} />
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          </>
        ))}
      </div>
      <div className="map">
        <SideMap lodgingsData={filteredLodgings} />
      </div>
    </div>
  )
}

export default Lodging