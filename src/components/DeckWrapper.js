import React from 'react';

export default ({ topContent, bottomContent, children }) => {
  const contentPositionStyles = {
    position: 'absolute',
    zIndex: 999999,
    width: '100vw',
    display: 'flex',
  };

  return (
    <div>
      <div
        style={{
          ...contentPositionStyles,
          top: 0,
        }}
      >
        {topContent}
      </div>
      {children}
      <div
        style={{
          ...contentPositionStyles,
          bottom: 0,
        }}
      >
        {bottomContent}
      </div>
    </div>
  );
};
