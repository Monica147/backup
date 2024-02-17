import React, { useState, useEffect } from 'react';
import './whyclockify.css';
import { Link } from 'react-router-dom';

const Whyclockify = () => {

  const buttonStyles = {
    '--bs-btn-padding-y': '.25rem',
    '--bs-btn-padding-x': '.5rem',
    '--bs-btn-font-size': '.75rem',
    'marginTop': '155px',
    'appearance': 'none',
    'background-color': 'transparent',
    // Add other styles as needed
  };





  const [itemActive, setItemActive] = useState(0);

  const slides = [
    {
      image: 'https://cdn.vectorstock.com/i/1000x1000/13/38/hurry-vector-51338.webp',
      title: 'Why TickTraq?',
      
    },
    {
      image: 'https://cdn.vectorstock.com/i/1000x1000/39/04/industrial-factory-landscape-cartoon-city-vector-48683904.webp',
      title: 'Industries',
      route: '/industries',
      
    },
    {
      image: 'https://cdn.vectorstock.com/i/1000x1000/11/35/isometric-data-collection-reporting-in-tax-period-vector-30711135.webp',
      title: 'Reporting',
      route: '/report',
      
    },
    {
      image: 'https://cdn.vectorstock.com/i/1000x1000/89/14/business-people-working-together-scheduling-vector-23748914.webp',
      title: 'Scheduling',
      route: '/scheduling',
      
    },
    {
      image: 'https://cdn.vectorstock.com/i/1000x1000/93/35/cartoon-woman-successfully-manages-time-vector-47129335.webp',
      title: 'Timekeeping',
      route: '/timekeep',
     
    },
    // Add more slides with similar structure
  ];

  const countItem = slides.length;

  const handleNextClick = () => {
    setItemActive((prev) => (prev + 1) % countItem);
  };

  const handlePrevClick = () => {
    setItemActive((prev) => (prev - 1 + countItem) % countItem);
  };

  const handleThumbnailClick = (index) => {
    setItemActive(index);
  };

  useEffect(() => {
    const refreshInterval = setInterval(() => {
      handleNextClick();
    }, 5000);

    return () => clearInterval(refreshInterval);
  }, [itemActive, countItem]);

  return (
    <div className="slider">
      <header>
        <div className="logo">Lundev</div>
        <ul className="menu">
          <li>Home</li>
          <li>Blog</li>
          <li>Info</li>
        </ul>
        <div className="search">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
      </header>

      <div className="slider">
        <div className="list">
          {slides.map((slide, index) => (
            <div key={index} className={`item ${index === itemActive ? 'active' : ''}`}>
              <img src={slide.image} alt={slide.title}  />
              <div className="content">
              
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
                {slide.route && (
                <Link to={slide.route} className="btn Buttonstyles" style={buttonStyles}>
                  Learn More
                </Link>
              )}
              </div>
            </div>
          ))}
        </div>

        <div className="arrows">
          <button id="prev" onClick={handlePrevClick}>
            &lt;
          </button>
          <button id="next" onClick={handleNextClick}>
            &gt;
          </button>
        </div>
        <div className="thumbnail">
  {slides.map((slide, index) => (
    <div
      key={index}
      className={`item ${index === itemActive ? 'active' : ''}`}
      onClick={() => handleThumbnailClick(index)}
    >
      <img src={slide.image} alt={`Slider ${index + 1}`} />
      <div className="content">
      {slide.route && (
                <Link to={slide.route} className="btn Buttonstyles" style={buttonStyles}>
                  Learn More
                </Link>
              )}
      </div>
    </div>
  ))}
</div>
</div>
</div>
  )
}
export default Whyclockify;