import React from 'react';
import './Page.css';
import somePage from './img.png';

const Page = () => {
  return (
    <div className="page">
      <div className="page_top">
        <button></button>
      </div>
      <div className="page_content">
        <div className="page_contante_some">
          <div className="page_contante_some_title">
            <h1>
              Make your
              <br /> Blog <span>Online</span>
            </h1>
          </div>
          <div className="page_contante_some_text">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Cupiditate, nesciunt. Nihil provident libero cupiditate quidem
              unde quae quas non impedit minima voluptatibus voluptate, porro
              incidunt.
            </p>
            <button>Learn More</button>
          </div>
        </div>
        <div className="div page_contante_img">
          <img src={somePage} alt="chat" />
        </div>
      </div>
    </div>
  );
};

export default Page;
