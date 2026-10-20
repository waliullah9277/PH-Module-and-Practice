import React, { use } from "react";

const Users = ({ usersPromise }) => {
  const users = use(usersPromise());
  return (
    <div>
      <h2>Total Users: {users.length}</h2>
      {users.map((user) => {
        return <li key={user.id}>{user.name} || {user.email}</li>;
      })}
    </div>
  );
};

export default Users;
