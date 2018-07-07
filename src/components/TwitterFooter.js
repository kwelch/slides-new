import React from 'react';

export default ({ theme, images }) => (
  <div
    style={{
      flex: 1,
      fontSize: '2.2rem',
      textAlign: 'right',
      marginBottom: '1rem',
      color: '#1ba1f3',
    }}
  >
    <span
      style={{
        backgroundColor: 'rgba(0,0,0,.1)',
        padding: '1rem 2rem',
      }}
    >
      <img alt="Twitter Logo" src={images.twitterLogo} height="28px" />
      @kylewelch
    </span>
  </div>
);
