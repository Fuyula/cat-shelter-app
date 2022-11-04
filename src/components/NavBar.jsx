import React from 'react'

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
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    <a class="nav-link" href="#">Meet our cats</a>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Adoptions
                        </a>
                        <ul class="dropdown-menu dropdown-menu-dark">
                            <li><a class="dropdown-item" href="#">How to adopt?</a></li>
                            <li><a class="dropdown-item" href="#">Adoption requeriments</a></li>
                            <li><hr class="dropdown-divider"/></li>
                            <li><a class="dropdown-item" href="#">Meet our cats</a></li>
                        </ul>
                    </li>
                    <a class="nav-link" href="#">Volunteering</a>
                    <a class="nav-link" href="#">Donate</a>
                    <a class="nav-link" href="#">Contact</a>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default NavBar