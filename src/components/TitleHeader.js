import React from 'react';

export default ({ theme, title }) => (
  <div
    style={{
      flex: 1,
      fontSize: '1.4rem',
      textAlign: 'center',
      marginTop: '.5rem',
      color: theme.screen.colors.secondary,
    }}
  >
    <span
      style={{
        backgroundColor: 'rgba(0,0,0,.1)',
        padding: '.5rem 2rem',
      }}
    >
      {title}
    </span>
  </div>
);
