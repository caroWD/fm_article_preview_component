import PostCard from "./PostCard";
import { posts } from "../../data/data";


const PostList = () => {
  return (
    <>
      {posts.map(post => <PostCard key={post.id} postItem={post}/>)}
    </>
  );
};


export default PostList;