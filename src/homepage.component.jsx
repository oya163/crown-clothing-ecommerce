import React from 'react';
import './homepage.styles.scss';

const HomePage = () => (
  <div className='homepage'>
    <div className='directory-menu'>
      <div className='menu-item'>
        <div classname='content'>
          <h1 classname='title'>HATS</h1>
          <span classname='subtitle'>SHOP NOW</span>
        </div>
      </div>
      <div className='menu-item'>
        <div classname='content'>
          <h1 classname='title'>Jackets</h1>
          <span classname='subtitle'>SHOP NOW</span>
        </div>
      </div>
      <div className='menu-item'>
        <div classname='content'>
          <h1 classname='title'>Pants</h1>
          <span classname='subtitle'>SHOP NOW</span>
        </div>
      </div>
      <div className='menu-item'>
        <div classname='content'>
          <h1 classname='title'>Mens</h1>
          <span classname='subtitle'>SHOP NOW</span>
        </div>
      </div>
      <div className='menu-item'>
        <div classname='content'>
          <h1 classname='title'>Womens</h1>
          <span classname='subtitle'>SHOP NOW</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
