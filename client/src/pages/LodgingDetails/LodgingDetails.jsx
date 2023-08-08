import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ImStarFull } from 'react-icons/im';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // Import the styles for date range picker
import 'react-date-range/dist/theme/default.css'; // Import the default theme for date range picker
// import ImageCarouselContainer from '../../components/ImageCarousel/ImageCarousel';
import './LodgingDetails.scss';

import ImageCarousel from "../../components/ImageCarousel/ImageCarousel"

const LodgingDetails = () => {
  const { id } = useParams();

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
      latitude: -20.2622,
      longitude: 57.4964,
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
      latitude: 34.0522,
      longitude: -118.2437,
      images: [
        'https://source.unsplash.com/random/?farmstay,eco,organic',
        'https://source.unsplash.com/random/?farmstay,eco,organic,tour',
        'https://source.unsplash.com/random/?farmstay,eco,organic,cooking,workshop',
        'https://source.unsplash.com/random/?farmstay,eco,organic,animals',
      ],
    },
  ];


  const lodging = lodgingsData.find((item) => item.id === parseInt(id));
  const [selectedRange, setSelectedRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const numberOfNights = () => {
    const start = selectedRange[0].startDate;
    const end = selectedRange[0].endDate;
    const diff = Math.floor((end - start) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 0;
  };

  return (
    <div className="lodging-details-container">
      <div className="left-side">
        <ImageCarousel images={lodging.images} />
        <div className="lodging-info">
          <h2>{lodging.title} </h2>
          <p>{lodging.description}</p>
          {/* Add other lodging specifications here (room dimensions, no. of rooms, pool, etc.) */}
          <p><h2>Price per night:</h2> {lodging.price}</p>
          <p><h2>Number of Rooms:</h2> {lodging.numRooms}</p>
          <p><h2>Room Dimensions:</h2> {lodging.roomDimensions}</p>
          <p><h2>Additional Information:</h2> {lodging.additionalInfo}</p>
        </div>
        <div className="rating">
          <p><h2>Rating:</h2> {Array(lodging.rating).fill(<ImStarFull className="star" key={lodging.id} />)}</p>
        </div>
        <div className="reviews">
          {lodging.reviews.map((review, index) => (
            <div key={index} className="review-item">
              <h2>Review:</h2>
              <p>{review}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="right-side">
        <div className="booking">
          {/* Date Range Picker for booking */}
          <DateRangePicker
            onChange={(item) => setSelectedRange([item.selection])}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={true}
            ranges={selectedRange}
            rangeColors={['#60C99C']}
          />
          {/* {console.log(selectedRange)} */}
          <div>
            <p>Number of Nights: {numberOfNights()}</p>
            <p>Total Price: ${numberOfNights() * parseInt(lodging.price.slice(1))}</p>
            <button className="book-button">Book Now</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LodgingDetails;

