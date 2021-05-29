import { Link } from "gatsby"
import React from "react"

interface NavProps {
    title?: string
}

const Nav: React.FC<NavProps> = ({ title }) =>  
<nav className="nav">
    <div className="nav-title">{title}</div>
    <div className="nav-links">
        <Link to="/" activeClassName="active-link">home</Link>
    </div>
</nav>

export default Nav