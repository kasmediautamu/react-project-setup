import React from 'react';
import { array, string } from 'prop-types';
import Item from './Item';

const List = ({ collection, textKey, titleKey }) => (
  <ul>
    {collection.map(item => (
      <Item
        key={item.id}
        text={item[textKey]}
        title={item[titleKey]}
      />
    ))}
  </ul>
);
List.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  collection: array,
  textKey: string,
  titleKey: string,
};
