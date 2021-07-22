import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

import '../css/ListOfBeers.css';

function ListOfBeers() {
  const [allBeers, setAllBeers] = useState([]);
  const [searchBeer, setSearchBeer] = useState('');

  const showingInfoSearch = (searchBeer) => {
    fetch(`https://ih-beers-api2.herokuapp.com/beers/search?q=${searchBeer}`)
      .then((response) => response.json())
      .then((json) => {
        setAllBeers(json);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };

  useEffect(() => {
    fetch('https://ih-beers-api2.herokuapp.com/beers').then((response) =>
      response.json().then((data) => infoFromApi(data))
    );
  }, []);

  const infoFromApi = (data) => {
    setAllBeers(data);
  };
  const searchingBeer = (e) => {
    e.preventDefault();
    setSearchBeer(e.target.value);
    showingInfoSearch(searchBeer);
  };
  return (
    <div className="List-Of-beers">
      <Header />
      <form>
        <input
          type="search"
          placeholder="Search a beer..."
          onChange={searchingBeer}
        />
      </form>
      <div className="container">
        {searchBeer < 0 ? (
          <p>there is not any beer with that name: {searchBeer}</p>
        ) : null}
        {allBeers.map((beer, index) => {
          return (
            <div key={index} className="row">
              <div className="col-4 img-details">
                <Link
                  to={{
                    pathname: '/SingleBeer',
                    aboutProps: beer,
                  }}
                >
                  <img src={beer.image_url} alt="" className="d-fluid" />
                </Link>
              </div>
              <div className="col-8 beer-details">
                <h2>{beer.name}</h2>
                <p className="text-muted">{beer.tagline}</p>
                <p>
                  <strong>Created by: </strong>
                  {beer.contributed_by}
                </p>
              </div>
              <hr className="dividing-line" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListOfBeers;
