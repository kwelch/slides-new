import React from 'react';
import { Appear, ListItem, List } from 'spectacle';

const AppearList = ({ items, textColor, textSize = 42, listStyleType = 'none', style = {} }) => (
  <List textColor={textColor} style={{ listStyleType, ...style }}>
    {items.map((val, i) => (
      <Appear key={i}>
        <ListItem style={{ fontSize: textSize, margin: '.5rem' }}>
          {listStyleType === 'none' ? '-' : ''} {val}
        </ListItem>
      </Appear>
    ))}
  </List>
);

export default AppearList;
