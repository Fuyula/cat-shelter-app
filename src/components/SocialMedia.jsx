import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/social-media.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const SocialMedia = ({size, color}) => {
    const iconSizes = {
        'sm': 'fs-5',
        'md': 'fs-4',
        'lg': 'fs-3',
        'xl': 'fs-2',
        'xxl': 'fs-1'
    }
  return (
    <div className = 'd-flex justify-content-around mx-2'>
        <a href = 'https://www.facebook.com/'>
            <FontAwesomeIcon 
                icon = { faFacebook } 
                className = {`${ iconSizes[size] } mx-2 social-media-icon`}
                style = {{ color: color }}
            />
        </a>
        <a href = "https://twitter.com/">
            <FontAwesomeIcon 
                icon = { faTwitter } 
                className = {`${ iconSizes[size] } mx-2 social-media-icon`}
                style = {{ color: color }}
            />
        </a>
        <a href = "https://www.instagram.com/">
            <FontAwesomeIcon 
                icon = { faInstagram } 
                className = {`${ iconSizes[size] } mx-2 social-media-icon`}
                style = {{ color: color }}
            />
        </a>
    </div>
  )
}

SocialMedia.propTypes = {
    size: PropTypes.string,
    color: PropTypes.string
}
SocialMedia.defaultProps = {
    size: "sm",
    color: '#ffffff'
}

export default SocialMedia