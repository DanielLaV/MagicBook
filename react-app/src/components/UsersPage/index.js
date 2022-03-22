import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './users.css';

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/users/');
      const responseData = await response.json();
      console.log('users', responseData)
      setUsers(responseData.users);
    }
    fetchData();
  }, []);

  const userComponents = users.map((user) => {
    return (
      <div className='eachUser' key={user.id}>
        <img className='postUserPic' src={user.pic} alt="User profile"></img>
        <NavLink className='userLink' to={`/users/${user.id}`}>{user.first_name} {user.last_name}</NavLink>
      </div>
    );
  });

  return (
    <div className='usersPage'>
      <div className='usersPageContent'>
        <h1 className='userListHeader'>Third Year Students</h1>
        <div className='usersListContainer'>{userComponents}</div>
      </div>
    </div>
  );
}

export default UsersList;
