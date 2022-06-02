import React from 'react';
import iconPerson from '../MainPage/img.png';
import './Header.css';

const Header = () => {
  return (
    <div>
      <div className="header_first">
        <button className="header_button"></button>
        <img src={iconPerson} alt="person" />
        <div>Username</div>
      </div>
    </div>
  );
};

export default Header;
