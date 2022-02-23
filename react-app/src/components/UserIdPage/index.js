import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../UsersPage/users.css';
import * as postActions from '../../store/posts';

function User() {
  const [user, setUser] = useState({});
  const { userId } = useParams();

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);

  // useEffect(() => {

  // }, [])

  if (!user) {
    return null;
  }

  return (
    <div className='userPage'>
      <div className='aboutUser'>
        <div className='userHeader'>
          <img className='postUserPic' src={user.pic} alt="User profile"></img>
          <h2 className='userLink'>{user.first_name} {user.last_name}</h2>
        </div>
        <div className='userBioContainer'>
          <h4>About {user.first_name}</h4>
          <p className='userBio'>{user.bio}</p>
        </div>
        <div>
          <h4>House</h4>
          <p className='userHouse'>{user.house}</p>
        </div>
        <div>
          <h4>Year</h4>
          <p className='userYear'>I'm in year {user.year}</p>
        </div>
      </div>
      <div className='userPostsContainer'>

      </div>
    </div>
  );
}
export default User;
