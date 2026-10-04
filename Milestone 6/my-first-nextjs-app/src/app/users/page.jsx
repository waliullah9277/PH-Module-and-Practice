import Link from "next/link";
import React, { use } from "react";

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return (
    <>
      <h2>User Page</h2>
      <div className="grid grid-cols-3 gap-4">
        {users.map((user) => (
          <div key={user.id} className="card bg-base-100 w-96 shadow-sm">
            <div className="card-body">
              <h2 className="card-title">Card title!</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions justify-end">
                <Link href={`/users/${user.id}`}>
                  <button className="btn btn-primary">View User Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default UsersPage;
