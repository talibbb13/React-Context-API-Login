import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user || user.length == 0) {
    return (
      <div className="text-center text-red-500 font-bold text-lg py-4">
        Please Login
      </div>
    );
  }
  else {
    return (
      <div className="text-center text-green-500 font-bold text-lg py-4">
        Welcome {user[0]} <br /> with password {user[1]}
      </div>
    );
  }
}

export default Profile;
