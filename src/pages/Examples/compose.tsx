import React from 'react';
import { object } from 'prop-types';

// eslint-disable-next-line no-unused-vars
const Profile = ({ user }) => (
  <div>
    <Picture profileImageUrl={user.profileImageUrl} />
    <UserName name={user.name} screenName={user.screenName} />
  </div>
);
Profile.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  user: object
};
