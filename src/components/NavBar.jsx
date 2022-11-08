import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/components/navbar.scss'

const NavBar = () => {
  return (
    <header className = "navbar navbar-expand-lg navbar-dark bg-dark sticky-top p-3">
        <article className = "container-fluid">
            <NavLink className = "navbar-brand" to="/">
                <img 
                    src = { require('../assets/shelter-logo.png') } 
                    alt = "Logo" 
                    width = "30" 
                    height = "24" 
                    className = "d-inline-block align-text-top"
                />
                Cat Shelter
            </NavLink>
            <button 
                className = "navbar-toggler" 
                type = "button" 
                data-bs-toggle = "collapse" 
                data-bs-target = "#navbarNavAltMarkup" 
                aria-controls = "navbarNavAltMarkup" 
                aria-expanded = "false" 
                aria-label = "Toggle navigation"
            >
                <span className = "navbar-toggler-icon"></span>
            </button>
            <section className = "collapse navbar-collapse justify-content-end" id = "navbarNavAltMarkup">
                <nav className = "navbar-nav position-relative">
                    <NavLink to = {'/'} className = "router-nav-link"> 
                        Home 
                    </NavLink>
                    <NavLink to =  {'meet-our-cats'} className = "router-nav-link"> 
                        Meet our cats 
                    </NavLink>
                    <li className = "nav-item dropdown mx-1 d-flex flex-column align-self-center text-center">
                        <a 
                            className = "nav-link dropdown-toggle" 
                            href = "#" 
                            role = "button" 
                            data-bs-toggle = "dropdown" 
                            aria-expanded = "false"
                        >
                            Adopt a cat
                        </a>
                        <ul className = "dropdown-menu dropdown-menu-dark">
                            <NavLink 
                                to = {'adopt-a-cat/how-to-adopt'} 
                                className = "dropdown-item dropdown-router-nav-link"
                            > 
                                How to adopt? 
                            </NavLink>
                            <NavLink 
                                to = {'adopt-a-cat/adoption-requeriments'} 
                                className = "dropdown-item dropdown-router-nav-link"
                            > 
                                Adoption requeriments
                            </NavLink>
                            <li><hr className = "dropdown-divider"/></li>
                            <NavLink 
                                to = {'meet-our-cats'} 
                                className = "dropdown-item dropdown-router-nav-link"
                            > 
                                Meet our cats 
                            </NavLink>
                        </ul>
                    </li>
                    <NavLink to = {'volunteering'} className = "router-nav-link"> 
                        Volunteering 
                    </NavLink>
                    <NavLink to = {'donate'} className = "router-nav-link"> 
                        Donate 
                    </NavLink>
                    <NavLink to = {'contact'} className = "router-nav-link"> 
                        Contact 
                    </NavLink>
                </nav>
            </section>
        </article>
    </header>
  )
}

export default NavBar