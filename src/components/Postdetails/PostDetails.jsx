import { Link, useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const {id, title,body} = post;
    return (
        <div>
           <h2>Post Details :{id} </h2> 
           <p>{title}</p>
          <h5>{body}</h5>
         
        </div>
    );
};

export default PostDetails;