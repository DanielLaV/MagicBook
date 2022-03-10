import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../UsersPage/users.css';
import * as postActions from "../../store/posts";
import * as userActions from "../../store/users";
import { useDispatch, useSelector } from 'react-redux';



function User() {
  const [user, setUser] = useState({});
  const { userId } = useParams();
  const thisUser = useSelector(state => state.users.filter(user => user.id === userId))

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.getUser(userId));
    dispatch(postActions.getPosts());
    setUser(thisUser);
  }, [dispatch, userId]);


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
