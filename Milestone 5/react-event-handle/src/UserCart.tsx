import './UserCart.css'

export default function({user}){

    return (
        <div className="user">
            <p>ID: {user.id}</p>
            <p><b>Name:</b> {user.name}</p>
            <p>username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
            <p>Address: {user.address.city}</p>
        </div>
    )
}