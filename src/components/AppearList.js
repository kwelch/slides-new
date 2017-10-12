import React from 'react';
import { Appear, ListItem, List } from 'spectacle';

const AppearList = ({ items, textColor, textSize = 42, style }) => (
  <List textColor={textColor} style={{ listStyleType: 'none', ...style }}>
    {items.map((val, i) => (
      <Appear key={i}>
        <ListItem style={{ fontSize: textSize, margin: '.5rem' }}>
          - {val}
        </ListItem>
      </Appear>
    ))}
  </List>
);

export default AppearList;
