import React from 'react';
import Advantages from '../components/advantages/advantages';
import Header from '../components/Header/Header';
import Portfolio from '../components/Potfolio/Portfolio';
import Price from '../components/Price/Price';
import Reviews from '../components/Reviews';
import Team from '../components/Team/Team';


function LandingPage(params) {
  return (
    <>
      <Header />
      <Advantages title="Преимущества" />
      <Team title="Команда" />
      <Portfolio title="Портфолио" />
      <Price title="Цены" />
      <Reviews title="Отзывы" />
    </>
  );
};

export default LandingPage;
