import React from 'react';
import Slider from '../Caurosol/Slider';
import Card from '../Card/Card';
import Navbar from '../Navbar/Navbar';
import Avtar from '../Avtar/Avtar';

const Home = () => {
  return (
    <div>
     
      {/*  Caurosol*/}

      <Slider></Slider>
      {/* Card */}

      <div className='mx-auto flex justify-center items-center pt-10'>
        <div className='px-4 md:px-10  grid gap-4 md:gap-10 items-center justify-center md:grid-cols-2 lg:grid-cols-3'>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
      {/* Profile */}
      <div className='flex justify-center my-10 mb-10 items-center'>
        <Avtar></Avtar>
      </div>


    </div>
  );
};

export default Home;