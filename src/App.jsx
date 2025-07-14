import React from 'react';
import './App.css';
import logo from './assets/logo.png';

function App() {
  return (
    <div className="app-container">
      <div className="booking-box">
        <img src={logo} alt="Prince Cabs" className="logo" />
        <h2>Book Your Ride with Prince</h2>
        <form className="booking-form">
          <input type="text" placeholder="Pickup Location" required />
          <input type="text" placeholder="Dropoff Location" required />
          <select required>
            <option value="">Select Car Type</option>
            <option value="standard">Standard</option>
            <option value="luxury">Luxury</option>
            <option value="van">Van</option>
          </select>
          <input type="tel" placeholder="Phone Number" required />
          <textarea placeholder="Notes (optional)" rows="3"></textarea>
          <button type="submit">Book Now</button>
        </form>
      </div>
    </div>
  );
}

export default App;
