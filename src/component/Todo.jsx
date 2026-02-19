import React from 'react';
import { useGetTodosQuery } from '../feature/apiThunk/RTKUserApi';

const Todo = () => {
  const { data: users, error, isLoading } = useGetTodosQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading users!</p>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.title}</li>
      ))}
    </ul>
  );
};


export default Todo;