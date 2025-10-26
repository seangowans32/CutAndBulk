import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const RegistrationForm = () => {

  // AOS Animations
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <div className="App-body registration-form">
        <div className='container container-2' data-aos="zoom-in-up">
          <div className="form-container">
            <h2>Registration Form</h2>

            <form>
              <div className='form-group'>
                <input type="text" placeholder='Username' required />
              </div>

              <div className='form-group'>
                <input type="email" placeholder='Email' required />
              </div>

              <div className='form-group'>
                <input type="date" placeholder='Date of Birth' required />
              </div>

              <div className='form-group'>
                <input type="password" placeholder='Password' required />
              </div>

              <button className='frontend-button' type='submit'>Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;