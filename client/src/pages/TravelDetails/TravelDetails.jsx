import { useParams } from 'react-router-dom';
import { ImStarFull } from 'react-icons/im'
import { useState } from 'react';

import './TravelDetails.scss';

function TravelDetails() {
  const { id } = useParams();

  const [hover, setHover] = useState(false);

  const handleMouseHover = () => {
    setHover(true)
  }
  const handleMouseLeave = () => {
    setHover(false)
  }

  const travelHistoryData = [
    {
      id: 1,
      location: 'Moscow, Russia',
      date: '2022-05-15',
      flight: 'AirlinesXYZ',
      flightTimings: 'Departure: 10:00 AM, Arrival: 4:00 PM',
      description: 'Explored the beautiful architecture and cultural landmarks in Moscow.',
      rating: 4,
      travelers: 2,
      sightings: 'Kremlin, Red Square, St. Basil’s Cathedral',
      image: 'https://images.pexels.com/photos/92412/pexels-photo-92412.jpeg?auto=compress&cs=tinysrgb&w=1600', // Add the image link for Moscow
      image2: 'https://images.pexels.com/photos/92412/pexels-photo-92412.jpeg?auto=compress&cs=tinysrgb&w=1600', // Add the image link for Moscow
      image3: 'https://images.pexels.com/photos/92412/pexels-photo-92412.jpeg?auto=compress&cs=tinysrgb&w=1600', // Add the image link for Moscow
    },
    {
      id: 2,
      location: 'Tokyo, Japan',
      date: '2022-07-22',
      flight: 'Japan Air',
      flightTimings: 'Departure: 8:30 PM, Arrival: 6:00 AM (next day)',
      description: 'Immersed in Tokyo’s vibrant city life and tried delicious sushi.',
      rating: 5,
      travelers: 1,
      sightings: 'Shibuya Crossing, Tokyo Tower, Senso-ji Temple',
      image: 'https://images.pexels.com/photos/1510595/pexels-photo-1510595.jpeg?auto=compress&cs=tinysrgb&w=1600', // Add the image link for Tokyo
      image2: 'https://images.pexels.com/photos/1510595/pexels-photo-1510595.jpeg?auto=compress&cs=tinysrgb&w=1600', // Add the image link for Tokyo
      image3: 'https://images.pexels.com/photos/1510595/pexels-photo-1510595.jpeg?auto=compress&cs=tinysrgb&w=1600', // Add the image link for Tokyo
    },
    {
      id: 3,
      location: 'Bali, Indonesia',
      date: '2021-11-03',
      flight: 'AirAsia',
      flightTimings: 'Departure: 12:00 PM, Arrival: 7:30 PM',
      description: 'Relaxed on Bali’s stunning beaches and experienced local culture.',
      rating: 4,
      travelers: 3,
      sightings: 'Uluwatu Temple, Ubud Rice Terraces, Kuta Beach',
      image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1600', // Add the image link for Bali
      image2: 'https://images.pexels.com/photos/931007/pexels-photo-931007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Add the image link for Bali
      image3: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Add the image link for Bali
    },
    {
      id: 4,
      location: 'Norway',
      date: '2021-08-10',
      flight: 'Norwegian Air Shuttle',
      flightTimings: 'Departure: 6:30 AM, Arrival: 2:00 PM',
      description: 'Embarked on an unforgettable fjord cruise and witnessed the Northern Lights.',
      rating: 5,
      travelers: 2,
      sightings: 'Geirangerfjord, Aurora Borealis, Viking Ship Museum',
      image: 'https://images.pexels.com/photos/3019893/pexels-photo-3019893.jpeg', // Add the image link for Norway
      image2: 'https://images.pexels.com/photos/3019893/pexels-photo-3019893.jpeg', // Add the image link for Norway
      image3: 'https://images.pexels.com/photos/3019893/pexels-photo-3019893.jpeg', // Add the image link for Norway
    },
    {
      id: 5,
      location: 'France',
      date: '2020-06-17',
      flight: 'Air France',
      flightTimings: 'Departure: 9:00 AM, Arrival: 5:30 PM',
      description: 'Explored the romantic streets of Paris and indulged in exquisite French cuisine.',
      rating: 3,
      travelers: 2,
      sightings: 'Eiffel Tower, Louvre Museum, Montmartre',
      image: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=1600', // Add the image link for France
      image2: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=1600', // Add the image link for France
      image3: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=1600', // Add the image link for France
    },
    {
      id: 6,
      location: 'Spain',
      date: '2019-09-28',
      flight: 'Iberia',
      flightTimings: 'Departure: 12:30 PM, Arrival: 9:00 PM',
      description: 'Soaked up the sun on the beaches of Barcelona and experienced the vibrant nightlife.',
      rating: 4,
      travelers: 4,
      sightings: 'Sagrada Familia, Park Güell, La Rambla',
      image: 'https://images.pexels.com/photos/930595/pexels-photo-930595.jpeg?auto=compress&cs=tinysrgb&w=1600', // Add the image link for Spain
      image2: 'https://images.pexels.com/photos/930595/pexels-photo-930595.jpeg?auto=compress&cs=tinysrgb&w=1600', // Add the image link for Spain
      image3: 'https://images.pexels.com/photos/930595/pexels-photo-930595.jpeg?auto=compress&cs=tinysrgb&w=1600', // Add the image link for Spain
    },
  ];

  const travelData = [travelHistoryData[id]];

  console.log(travelData)

  return (
    <>
      {travelData.map((travelData, index) => (
        <div className="background" key={index}>
          <div className="travel-details-container">
            <div className="left">
              <h2>{travelData.location}</h2>
              <p><h3>Date:</h3> {travelData.date}</p>
              <p><h3>Flight:</h3> {travelData.flight}</p>
              <p><h3>Flight Timings:</h3> {travelData.flightTimings}</p>
              <p><h3>Description:</h3> {travelData.description}</p>
              <div className="rating">
                <h3>Rating:</h3>
                {Array(travelData.rating).fill(<ImStarFull className="star" />)}
              </div>
              <p><h3>Number of Travelers:</h3> {travelData.travelers} </p>
              <p><h3>Sightings:</h3> {travelData.sightings}</p>
            </div>
            <div className="right">
              <div className="image-container">
                <div className="image2">
                  <img className='img2' src={travelData.image2} alt={travelData.location} style={{ filter: hover ? 'blur(0)' : 'blur(5px)' }} onMouseEnter={handleMouseHover} onMouseLeave={handleMouseLeave}/>
                </div>
                <div className="image3">
                  <img className='img3' src={travelData.image3} alt={travelData.location} style={{ filter: hover ? 'blur(5px)' : 'blur(0)' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default TravelDetails;