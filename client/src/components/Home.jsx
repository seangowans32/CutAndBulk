import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import './Home.css';

// import bannerImg from '../assets/img-2.jpg';
// import introImg from '../assets/img-4.jpg';
// import missionImg from '../assets/img-7.jpg';
// import Footer from './Footer.jsx';


import BodyCalculator from './BodyCalculator.jsx';
import RegistrationForm from './RegistrationForm.jsx';
import LoginForm from './LoginForm.jsx';
import History from './History.jsx';

import Footer from './Footer.jsx';

export default function Home() {

  // AOS Animations
  useEffect(() => {
    AOS.init();
  }, []);

  return(
    <>
      <div className="App">
        <div className="App-body">
          <div className='container'>
            <BodyCalculator />
            {/* <RegistrationForm /> */}
            {/* <LoginForm /> */}
            {/* <History /> */}
            {/* <Footer /> */}
          </div>
        </div>
      </div>
    </>
  );
}