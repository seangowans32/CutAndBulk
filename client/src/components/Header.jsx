import { Link } from 'react-router-dom';

export default function Header() {
  return(
    <>
      <header className="header">
        <div className="container">
          <nav className="flex gap-20">
            <span className="logo">SG</span>
            <Link to="/">Home</Link>
            <Link to="/registration">Registration</Link>
          </nav>
        </div>
      </header>
    </>
  );
}