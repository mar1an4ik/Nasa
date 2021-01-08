import * as React from 'react'
import nav from "./NavBar.module.css"
import {NavLink} from "react-router-dom";


const NavBar = () => (
    <div className={nav.NavBar}>

    <span className={nav.logo}>
<img src={"https://i.ibb.co/yfp2PHT/logo.png"} className={nav.logo}/>
    </span>

        <div className={nav.navLinks}>
           <span className={nav.welcome}>Welcome to your blog!

           </span>

            <nav className={nav.menu}>
                <NavLink to='/'><a>My blog</a></NavLink> {'  '}

                <NavLink to='/new'><a>Create Post</a></NavLink> {'  '}
            </nav>
        </div>

    </div>
)

export default NavBar