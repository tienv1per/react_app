import '../views/Nav.scss';
import { NavLink } from 'react-router-dom';


const Nav = () => {
    const status = ({ isActive, isPending }) => {
        return isActive ? "active" : ""
    };

    return (
        <div className="topnav">
            <NavLink className={status} to="/" exact="true">Home</NavLink>
            <NavLink className={status} to="/covid">Covid</NavLink>
            <NavLink className={status} to="/blogs">Blogs</NavLink>
            <NavLink className={status} to="/about">About</NavLink>
        </div>
    );
}

export default Nav;