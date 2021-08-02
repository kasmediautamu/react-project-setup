import React from 'react';
import { string } from 'prop-types';

const Item = ({ text, title }) => (
  <li>
    <h1>{title}</h1>
    {text && <p>{text}</p>}
  </li>
);
Item.propTypes = {
  text: string,
  title: string,
};
export default Item;
