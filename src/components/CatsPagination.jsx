import React from 'react'
import PropTypes from 'prop-types';
import '../styles/components/cats-pagination.scss'

const CatsPagination = props => {
  return (
    <nav aria-label="Page navigation example" className='m-5'>
        <ul className="pagination justify-content-center">
            <li className="page-item disabled">
                <a className="page-link bg-dark text-light">Previous</a>
            </li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item">
                <a className="page-link  bg-dark text-light" href="#">Next</a>
            </li>
        </ul>
    </nav>
  )
}

CatsPagination.propTypes = {}

export default CatsPagination