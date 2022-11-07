import React from 'react'
import PropTypes from 'prop-types'
import '../styles/components/single-img-section-container.scss'

const SingleImgSectionContainer = ({ imgUrl, title, content, reverse }) => {
  return (
    <div className={`container-fluid row d-flex ${reverse? 'flex-row-reverse' : 'flex-row'} align-items-centerc mt-3 mb-5`}>
          <div className='col d-flex flex-column align-items-center justify-content-center'>
              <img
                className='single-img-section-img p-2'
                src = { imgUrl }
              />
          </div>
          <div className='col d-flex flex-column align-items-center justify-content-center'>
              <h2 className='display-4 my-5'>{ title }</h2>
              <p> { content }</p>
            </div>
        </div>
  )
}

SingleImgSectionContainer.propTypes = {
    imgUrl: PropTypes.string.isRequired,
    title: PropTypes.string,
    content: PropTypes.string,
    reverse: PropTypes.bool,
}

SingleImgSectionContainer.defaultProps = {
    title: '',
    content: '',
    reverse: false,
}

export default SingleImgSectionContainer