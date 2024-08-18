import { Link } from "react-router-dom";

const Post = ({post}) => {
    const {id,title} = post;
    return (
        <div className="use">
            <h3>{id}</h3>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post Details</Link>
          <Link to={`/post/${id}`}> 
          <button>
            show details
          </button>
          </Link>
        </div>
    );
};

export default Post;