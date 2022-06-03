import React from 'react';
import iconPerson from '../MainPage/img.png';
import './Header.css';

interface IHeaderProps {
  collapse: boolean;
}

const Header: React.FC<IHeaderProps> = ({ collapse }) => {
  return (
    <div>
      <div
        className={collapse ? 'header_first header_first-show' : 'header_first'}
      >
        <button
          className={collapse ? 'header_button-collapse' : 'header_button'}
        >
          <img src={iconPerson} alt="person" />
        </button>
        {collapse ? (
          <>
            <div className="username">Username</div>
            <div className="container">
              <div className="container_left">
                <div className="allposts">
                  <p>All Posts</p>
                </div>
                <div className="myposts">
                  <p className="mypost-text">My Posts</p>
                  <p>Add posts</p>
                </div>
              </div>
              <div className="container_right">
                <p>Log out</p>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
