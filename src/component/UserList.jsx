import React from 'react';
import { useGetUsersQuery } from './features/apiThunk/RTKUserApi.jsx';

const UsersList = () => {
  const { data: users, error, isLoading } = useGetUsersQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading users!</p>;

  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
};

export default UsersList;