import { Link } from 'react-router-dom';
import './Use.css'
const Use = ({use}) => {
    const {id,name,phone,email} = use
    return (
        <div className='use md:laptop lg:desktop'>
            <h2>{name}</h2>
            <p>email: {email} </p>
            <p>phone: {phone} </p>
            <Link to={`/use/${id}`}>details</Link>
            <Link to={`/use/${id}`}>
            <button>Click me</button>
            </Link>
        </div>
    );
};

export default Use;