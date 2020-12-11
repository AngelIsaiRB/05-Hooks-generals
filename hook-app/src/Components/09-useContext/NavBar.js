import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link className="navbar-brand" to="./" > Usecontext </Link>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink exact activeClassName="active" className="nav-item nav-link " to="./">Home</NavLink >
                    <NavLink exact activeClassName="active" className="nav-item nav-link " to="./about">About</NavLink >
                    <NavLink exact activeClassName="active" className="nav-item nav-link " to="./login">Login</NavLink >
                   
                </div>

            </div>

        </nav>



        // <nav>
        //     <ul>
        //         <li> <Link to="./">Home </Link></li>
        //         <li><Link to="./about">about</Link></li>
        //         <li><Link to="./login">login</Link></li>
                
        //     </ul>
        // </nav>
    )
}
