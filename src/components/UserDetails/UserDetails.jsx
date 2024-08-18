import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const use = useLoaderData();
    const {name, phon} = use;
    return (
        <div>
            <h2>Details About us : {name}</h2>
            <p>{phon}</p>
        </div>
    );
};

export default UserDetails;