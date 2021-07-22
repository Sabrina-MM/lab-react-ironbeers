import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';

import '../css/SingleBeer.css';
function RandomBeers() {
  const [randomBeer, setRandomBeer] = useState([]);
  let callTheApi = useRef();

  callTheApi = () => {
    fetch('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((response) => response.json())
      .then((data) => gettinRandomInfo(data));
  };
  useEffect(() => {
    callTheApi();
  }, []);

  const gettinRandomInfo = (data) => {
    setRandomBeer(data);
  };

  return (
    <div className="Single-beer">
      <Header />
      <button
        onClick={() => callTheApi()}
        className="bg-warning rounded p-2 border-warning"
      >
        <i className="fas fa-redo"></i>
      </button>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-4 img-details">
            <img src={randomBeer.image_url} alt="" className="d-fluid" />
          </div>
          <div className="col-sm-8 beer-details">
            <div className="row">
              <h2 className="col-6">{randomBeer.name}</h2>
              <h2 className="col-6 text-muted d-flex justify-content-end">
                {randomBeer.attenuation_level}
              </h2>
            </div>
            <div className="row">
              <p className="col-6 text-muted">{randomBeer.tagline}</p>
              <p className="col-6 d-flex justify-content-end">
                {randomBeer.first_brewed}
              </p>
            </div>
            <p>{randomBeer.description}</p>
            <p className="text-muted">
              <strong>Created by: </strong>
              {randomBeer.contributed_by}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RandomBeers;
