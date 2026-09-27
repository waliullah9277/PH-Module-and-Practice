
interface UserProps {
    username?: string
}

export default function User({username} : UserProps){
    return (
        <>
        <p>Hello, {username || "Guest"}</p>
        </>
    )
}