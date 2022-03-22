import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../UsersPage/users.css';


function User() {
  const [user, setUser] = useState({});
  const { userId } = useParams();
  console.log(userId, 'userid')

  useEffect(() => {
    if (!userId) {
      return;
    }
    // get the user for this page and set that object as user
    (async () => {
      const response = await fetch(`/api/users/`);
      const usersData = await response.json();
      const users = usersData.users;
      const currUser = users.filter(user => +user.id === +userId)[0];
      setUser(currUser);
    })();
  }, []);


  if (!user) {
    return null;
  }

  return (
    <div className='userPage'>
      <div className='aboutUser'>
        <div className='userHeader'>
          <img className='userPic' src={user.pic} alt="User profile"></img>
          <h1 className='userName'>{user.first_name} {user.last_name}</h1>
        </div>
        <div className='userBioContainer'>
          <h2>About {user.first_name}</h2>
          <p className='userBio'>{user.bio}</p>
        </div>
        <div>
          <h3>{user.house} House</h3>
        </div>
        <div>
          <h3>Year {user.year}</h3>
        </div>
      </div>
      <div className='userPostsContainer'>

      </div>
    </div>
  );
}
export default User;
