import React from 'react';
import PropTypes from 'prop-types';

const SingleCatCard = ({ cat }) => {
  return (
    <div className = "card mx-2 mt-5 d-flex flex-column">
        <div className = "row g-0 d-flex flex-grow-1">
            <div className = "col-lg-5">
                <img 
                    src = { cat['image-url'] }
                    className = "img-fluid"
                    alt = "..."
                    style = {{ height: '100%', objectFit: 'cover'}}
                />
            </div>
            <div className = "col-lg-7">
                <div className = "card-body py-4 px-1">
                    <h5 className = "card-title">
                        { cat['cat-name'] }
                    </h5>
                    <p className = "card-text">
                        { cat['cat-description'] }
                    </p>
                    <ul className = "list-group list-group-flush">
                        <li className = "list-group-item d-flex justify-content-between mx-3 text-start">
                            <b>Sex</b>{ cat.sex }
                        </li>
                        <li className = "list-group-item d-flex justify-content-between mx-3 text-start">
                            <b>Age</b> { cat['cat-age'] }
                        </li>
                        <li className = "list-group-item d-flex justify-content-between mx-3 text-start">
                            <b>Sterilized</b> { cat['is-steralized'] }
                        </li>
                        <li className = "list-group-item d-flex justify-content-between mx-3 text-start">
                            <b>Gets along with pets</b> { cat['gets-along-with-pets'] }
                        </li>
                        <li className = "list-group-item d-flex justify-content-between mx-3 text-start">
                            <b>Gets along with children</b> { cat['gets-along-with-children'] }
                        </li>
                        {
                            cat['has-special-needs'] === "No"?
                            <li className="list-group-item d-flex justify-content-between mx-3">
                                <b>Has special needs</b> { cat['has-special-needs'] }
                            </li>
                            :
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item d-flex justify-content-between mx-3">
                                    <b>Has special needs</b> { cat['has-special-needs'] }
                                </li>
                                { 
                                    cat['special-needs'].map(( affliction, idx ) => 
                                        {
                                            return (
                                                <li className="list-group-item" key = { `affliction ${ idx }`}> 
                                                    { affliction }
                                                </li>
                                            )
                                        }
                                    )
                                }
                            </ul>
                        }
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

SingleCatCard.propTypes = {
    cat: PropTypes.object,
}

export default SingleCatCard