import React from 'react';
import carImage from './car.png';

function MainPage() {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold">Cars.</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          We keep you running
        </p>
        <img src={carImage} alt="Car" className="car-image" style={{ width: '300px', height: 'auto' }} />
      </div>
    </div>
  );
}

export default MainPage;
