import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../styles/components/footer.scss';

const Footer = () => {
  return (
    <nav class="navbar navbar-dark bg-dark bottom p-5">
        <div class="container-fluid d-flex justify-content-around">
            <p className='text-light'>Calle Merced 535, Santiago, Chile</p>
            <p className='text-light'>© 2022 Cat Shelter</p>
            <div className='d-flex justify-content-around'>
                <a href='https://www.facebook.com/'>
                    <FontAwesomeIcon icon={faFacebook} className="fs-5 mx-2 social-media-icon"/>
                </a>
                <a href="https://twitter.com/">
                    <FontAwesomeIcon icon={faTwitter} className="fs-5 mx-2 social-media-icon"/>
                </a>
                <a href="https://www.instagram.com/">
                    <FontAwesomeIcon icon={faInstagram} className="fs-5 mx-2 social-media-icon"/>
                </a>
            </div>
        </div>
    </nav>
  )
}

export default Footer