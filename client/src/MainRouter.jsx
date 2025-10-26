import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import RegistrationForm from './components/RegistrationForm.jsx';
import './components/Global.css';
import './components/Header.css';

const MainRouter = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<RegistrationForm />} />
      </Routes>
    </>
  )
}

export default MainRouter;