import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/components/navbar.scss'

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top p-3">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src={require('../assets/shelter-logo.png')} alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/>
                Cat Shelter
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div class="navbar-nav position-relative">
                    <NavLink to={'/'} className="router-nav-link">Home</NavLink>
                    <NavLink to={'meet-our-cats'} className="router-nav-link">Meet our cats</NavLink>
                    <li class="nav-item dropdown mx-1">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Adoptions
                        </a>
                        <ul class="dropdown-menu dropdown-menu-dark">
                            <NavLink to={'adoptions/how-to-adopt'} className="dropdown-router-nav-link">How to adopt?</NavLink>
                            <NavLink to={'adoptions/adoption-requeriments'} className="dropdown-router-nav-link">Adoption requeriments</NavLink>
                            <li><hr class="dropdown-divider"/></li>
                            <NavLink to={'meet-our-cats'} className="dropdown-router-nav-link">Meet our cats</NavLink>
                        </ul>
                    </li>
                    <NavLink to={'volunteering'} className="router-nav-link">Volunteering</NavLink>
                    <NavLink to={'donate'} className="router-nav-link">Donate</NavLink>
                    <NavLink to={'contact'} className="router-nav-link">Contact</NavLink>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default NavBar