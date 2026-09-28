
import { Suspense } from 'react'
import './App.css'
import Users from './Users'
import Post from './Post'
import Todos from './Todos'
// import Batter from './Batter'
// import Cart from './Cart'
// import Counter from './Counter'

const UserDataPromise =async() =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json();
  return data;
}

const UserPostPromise = async() =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json();
  return data;
}

function App() {

  // const handleClickMe = (id: number) =>{
  //   alert("Click Items no is " + id)
  // }

  return (
    <>
      <h1>Get started</h1>

      <Todos></Todos>

      <Suspense fallback={<p>Loading...</p>}>
        <Users userDataPromise={UserDataPromise()}></Users>
      </Suspense>

      <Suspense fallback={<p>Post Loading......</p>}>
        <Post userPostsPromise={UserPostPromise()}></Post>
      </Suspense>


      {/* <Cart></Cart>
      <Counter></Counter>
      <Batter></Batter> */}

      {/* <button onClick={handleClickMe}>Click Me</button> */}
      {/* <button onClick={() => handleClickMe(55)}>Click Me 2</button> */}
      {/* <button onClick={()=> alert("Click me button 3")}>Click Me 3</button> */}
    </>
  )
}

export default App
