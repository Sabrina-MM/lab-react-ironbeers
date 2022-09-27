import React, { useState } from 'react';
import Header from '../components/Header';

import '../css/NewBeer.css';
function NewBeer() {
  const [data, setData] = useState({
    name: '',
    tagline: '',
    description: '',
    firstbrewed: '',
    brewerstips: '',
    attenuation: Number,
    Contributed: '',
  });

  const handleInputChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const sendForm = (e) => {
    e.preventDefault();
    /*  console.log(
      `sending data ...${data.name},${data.tagline},${data.description},${data.firstbrewed},${data.brewerstips},${data.attenuation},${data.contributed}`
    ); */
    fetch('https://ih-beers-api2.herokuapp.com/beers/new', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log('Success:', json);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    e.target.reset();
  };

  return (
    <div className="New-beer">
      <Header />
      <div className="container">
        <h1>New-beer</h1>
        <form onSubmit={sendForm}>
          <input
            type="text"
            placeholder="Name"
            onChange={handleInputChange}
            name="name"
          />
          <input
            type="text"
            placeholder="Tagline"
            onChange={handleInputChange}
            name="tagline"
          />
          <input
            type="text"
            placeholder="Description"
            className="description"
            onChange={handleInputChange}
            name="description"
          />
          <input
            type="text"
            placeholder="First Brewed"
            onChange={handleInputChange}
            name="firstbrewed"
          />
          <input
            type="text"
            placeholder="Brewers Tips"
            onChange={handleInputChange}
            name="brewerstips"
          />
          <input
            type="number"
            placeholder="Attenuation Level"
            onChange={handleInputChange}
            name="attenuation"
          />
          <input
            type="text"
            placeholder="Contributed By"
            onChange={handleInputChange}
            name="contributed"
          />
          <button type="submit">Add New</button>
        </form>
      </div>
    </div>
  );
}

export default NewBeer;
