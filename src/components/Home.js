import React from 'react';
import { Link } from 'react-router-dom';
import beers from '../assets/beers.png';
import newBeer from '../assets/newBeer.png';
import randomBeer from '../assets/randomBeer.png';

import '../css/Home.css';
function Home() {
  return (
    <div className="Home" style={{ height: '100%' }}>
      <div className="row">
        <div className="col-sm-4">
          <div className="card">
            <img src={beers} className="d-fluid " alt="" />
            <div className="card-content">
              <Link to="/ListOfBeers">All Beers</Link>
              <p className="text-muted">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
            <img src={randomBeer} className="d-fluid" alt="" />
            <div className="card-content">
              <Link to="/RandomBeers">Random Beers</Link>
              <p className="text-muted">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
            <img src={newBeer} className="d-fluid" alt="" />
            <div className="card-content">
              <Link to="/NewBeer">New Beers</Link>
              <p className="text-muted">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
