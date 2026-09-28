import './UserCart.css'

export default function PostCart({post}){
    return (
        <div className="user">
            <p>UserID: {post.userId} and ID: {post.id}</p>
            <p>Title: {post.title}</p>
            <p>Body: {post.body}</p>
        </div>
    )
}