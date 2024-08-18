
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
          
            <nav>
                <Link to='/'  style={{marginRight:'20px'}}>Home</Link>
                <Link to='/user'  style={{marginRight:'20px'}}>user</Link>
                <Link to='/about'  style={{marginRight:'20px'}}>About</Link>
                <Link to='/posts' style={{marginRight:'20px'}}>posts</Link>
                <Link to='/contact'>contact</Link>
            </nav>
        </div>
    );
};

export default Header;