import React from 'react';
import Header from '../components/Header';

import '../css/SingleBeer.css';

function SingleBeer(props) {
  let resultProps = ('SingleBeer', props.location.aboutProps);

  if (resultProps) {
    return (
      <div className="Single-beer">
        <Header />
        <div className="container mt-5">
          <div className="row">
            <div className="col-sm-4 img-details">
              <img src={resultProps.image_url} alt="" className="d-fluid" />
            </div>
            <div className="col-sm-8 beer-details">
              <div className="row">
                <h2 className="col-6">{resultProps.name}</h2>
                <h2 className="col-6 text-muted d-flex justify-content-end">
                  {resultProps.attenuation_level}
                </h2>
              </div>
              <div className="row">
                <p className="col-6 text-muted">{resultProps.tagline}</p>
                <p className="col-6 d-flex justify-content-end">
                  {resultProps.first_brewed}
                </p>
              </div>
              <p>{resultProps.description}</p>
              <p className="text-muted">
                <strong>Created by: </strong>
                {resultProps.contributed_by}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else return null;
}

export default SingleBeer;
