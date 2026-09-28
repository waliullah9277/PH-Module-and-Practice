import { use } from "react";
import UserCart from "./UserCart";

function Users({userDataPromise}){

    const users = use(userDataPromise);
    console.log(users)

    return (
        <div>
            <h2>Users: {users.length}</h2>
            {
                users.map((user) => <UserCart user={user}></UserCart>)
            }
        </div>
    )
}

export default Users;




// normal js api fetch

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json())
// .then(data => console.log(data))

// async function loadData(){
//     const res = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await res.json();
//     return data;
// }

// const loadData2 = async() =>{
//     const res = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await res.json();
//     return data;
// }