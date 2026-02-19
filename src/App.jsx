import Photos from "./components/Photos";
import Todo from "./components/Todo";
// import UsersList from "./components/UserList";
import { useGetUsersQuery } from "./features/apiThunk/RTKUserApi.jsx";

const App = () => {
  const {data: users, error, isLoading} = useGetUsersQuery();

  if(isLoading) return <p>Loading...</p>
  if(error) return <p>Error Loading users!</p>;

  return(
    <>
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>

    <Todo/>
    <Photos/>
    
    </>
  )
}

export default App





// import React from 'react';
// import {useGetUsersByIdQuery } from './features/apiThunk/RTKUserApi.jsx';
// import Todo from "./components/Todo.jsx"
// import Photos from "./components/Photos.jsx"

// const App = () => {
//   const { data: users, error, isLoading } = useGetUsersByIdQuery(2);

//   if (isLoading) return <p>Loading...</p>;
//   if (error) return <p>Error loading users!</p>;

//   return (
//     <>
//       <ul>
//         <li>{users.name}</li>
//       </ul>

//       {/* <Todo />
//       <Photos /> */}
//     </>
//   );
// };

// export default App;