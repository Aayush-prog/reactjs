import React from 'react';
function Header() {
    return (
      <header>
        <nav className="nav">
          <img
            src="https://media.istockphoto.com/id/637696304/photo/patan.jpg?s=612x612&w=0&k=20&c=-53aSTGBGoOOqX5aoC3Hs1jhZ527v3Id_xOawHHVPpg="
            className="nav-logo" 
          />
          <ul className="nav-items">
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
          </ul>
        </nav>
      </header>
    );
  }
  export default Header