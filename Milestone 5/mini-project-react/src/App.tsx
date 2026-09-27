
import './App.css'
import { UserCart } from './UserCard'
import { UserList } from './UserList'


export interface User{
  id: number
  name: string
  email: string
  isActive: boolean
}

const users: User[] = [
  {id: 1, name: "Waliullah", email: "wali@gmail.com", isActive: true},
  {id: 2, name: "Jakia", email: "jakia@gmail.com", isActive: true},
  {id: 3, name: "Rahim", email: "rahim@gmail.com", isActive: false},
  {id: 4, name: "Abdullah", email: "abdullah@gmail.com", isActive: true},
  {id: 5, name: "Rony", email: "rony@gmail.com", isActive: false}
]


function App() {

  return (
    <>
      <h1>Get started</h1>
      <UserList users={users}></UserList>

    {users.map(user=>{
      return <UserCart key={user.id} user={user}></UserCart>
    })}
    </>
  )
}

export default App
