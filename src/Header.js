import React from "react"
import { NavLink} from 'react-router-dom';


const Header = ()=>{
    return(
        <ul className="navigation-menu">
            <li>
                <NavLink activeClassName="active" to ="/" exact={true}>Home</NavLink>
            </li>
            <li>
            <NavLink activeClassName="active" to ="/contact">contact</NavLink>
            </li>
            <li>
            <NavLink activeClassName="active" to ="/about">about</NavLink>
            </li>
            <li>
            <NavLink activeClassName="active" to ="/profile">profile</NavLink>
            </li>
        </ul>
    );
};

export default Header;