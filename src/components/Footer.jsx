import React from 'react';

import SocialMedia from './SocialMedia';

const Footer = () => {
  return (
    <footer className = "navbar navbar-dark bg-dark bottom p-5">
        <address className = "container-fluid d-flex justify-content-around">
            <p className = 'text-light text-center mx-2'>
                Calle Merced 535, Santiago, Chile
            </p>
            <p className = 'text-light text-center mx-2'>
                © 2022 Cat Shelter
            </p>
           <SocialMedia />
        </address>
    </footer>
  )
}

export default Footer