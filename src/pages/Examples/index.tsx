import React from 'react';
import { shape, string } from 'prop-types';

const Profile = ({ user }) => (
  <div>
    {user.name}
    {user.surname}
  </div>
);

Profile.propTypes = {
  user: shape({
    name: string.isRequired,
    surname: string
  }).isRequired
};

export default Profile;

// If none of the existing React propTypes satisfies our needs, we can create a custom
// function to validate a property:
//  user: shape({
//  age: (props, propName) => {
//  if (!(props[propName] > 0 && props[propName] < 100)) {
//  return new Error(`${propName} must be between 1 and 99`);
//  }
// return null;
//  }
//  })
