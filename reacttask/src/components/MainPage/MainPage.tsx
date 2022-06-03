import React from 'react';
import Header from '../Header/Header';
import './MainPage.css';
import Page from '../Pag/Page';

const MainPage = () => {
  return (
    <>
      <header className="header">
        <Header collapse={false} />
        <Header collapse={true} />
      </header>
      <Page />
    </>
  );
};

export default MainPage;
