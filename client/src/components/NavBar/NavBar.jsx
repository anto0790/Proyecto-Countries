import { Link } from "react-router-dom";
import './NavBar.css';

const NavBar = () =>{
    return(
        <div className="navContainer">
            <Link to='/home' >Home</Link>
            <Link to='/create' >Form</Link>
        </div>
    )
}

export default NavBar;