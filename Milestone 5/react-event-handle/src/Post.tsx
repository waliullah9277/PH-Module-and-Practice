import { use } from "react"
import PostCart from "./PostCart"


export default function Post({userPostsPromise}){
    const posts = use(userPostsPromise)
    console.log(posts)
    return (
        <div>
            <h2>Total Posts: {posts.length}</h2>
            {
                posts.map(post => <PostCart post={post}></PostCart>)
            }
        </div>
    )
}