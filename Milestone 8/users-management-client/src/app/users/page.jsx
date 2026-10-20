import React, { Suspense } from "react";
import Users from "../components/Users";

const usersPromise = async () => {
  const res = await fetch("http://localhost:5000/users");
  return res.json();
};

const UsersPage = async () => {
  return (
    <div className="container mx-auto">
      <h2>Users are Comming soon....</h2>
      <Suspense fallback={<h3>Loading....</h3>}>
        <Users usersPromise={usersPromise}/>
      </Suspense>
    </div>
  );
};

export default UsersPage;
