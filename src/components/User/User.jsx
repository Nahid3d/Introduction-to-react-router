import { useLoaderData } from "react-router-dom";
import Use from "../Use/Use";

const User = () => {
    const user = useLoaderData();
    console.log(user)

    return (
        <div>
           <h3>Our user {user.length}</h3>
           <div className="users">
            {
                user.map(use => <Use use={use} key={use.id}></Use>)
            }
            </div> 
           
        </div>
    );
};

export default User;