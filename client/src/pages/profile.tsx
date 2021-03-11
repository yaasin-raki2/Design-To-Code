import React from "react";

import { useAuth0 } from "@auth0/auth0-react";

const Profile: React.FC = () => {
  const { user } = useAuth0();
  const { name, picture, email } = user;

  return (
    <div>
      <h1>This is the Profile Page</h1>
      <h2>NOT ANYONE CAN ACCESS THIS</h2>
      <img src={picture} alt="Profile" />
      <h3>{name}</h3>
      <h3>{email}</h3>
    </div>
  );
};

export default Profile;
