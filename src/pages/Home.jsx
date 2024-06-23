import { useEffect, useState } from "react";
import PostList from "../components/Posts";
import { getOtherPost } from "./api";
import { useDispatch } from "react-redux";


const Home = () => {

const [posts,setPosts] = useState([]);
const dispatch = useDispatch();

const loadMyPosts = async () => {
    dispatch({type: "open_loading"});
    const data = await getOtherPost();
    setPosts(data);
    dispatch({type: "stop_loading"});
};

useEffect(() => {
    loadMyPosts();
},[]);

    return  <div style={{margin: 24, maxWidth: 900}}> 
        <PostList postsData={posts} />
    </div>

}
export default Home;