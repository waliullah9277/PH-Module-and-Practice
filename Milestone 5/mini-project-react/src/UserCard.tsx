
import type { User } from "./App";

interface UserCardProps {
    user: User;
}

export function UserCart({user}: UserCardProps) {

    return (
        <>
            <div key={user.id} style={{ border: "1px solid red", margin: "10px" }}>
                <ul>
                    <li>ID: {user.id}</li>
                    <li>Name: {user.name}</li>
                    <li>Email: {user.email}</li>
                    <li>Status: {user.isActive ? "Active" : "Inactive"}</li>
                </ul>
            </div>
        </>
    )
}