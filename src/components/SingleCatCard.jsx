import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/single-cat-card.scss'

const SingleCatCard = ({ cat }) => {
  return (
    <article className = "cat-card mx-2 mt-5 d-flex flex-column">
        <div className = "row g-0 d-flex flex-grow-1">
            <figure className = "col-lg-5" style={{ padding: 0, margin: 0}}>
                <img 
                    src = { cat['image-url'] }
                    className = "img-fluid"
                    alt = "..."
                    style = {{ height: '100%', objectFit: 'cover'}}
                />
            </figure>
            <section className = "col-lg-7">
                <article className = "card-body py-4 px-1">
                    <h5 className = "card-title">
                        { cat['cat-name'] }
                    </h5>
                    <p className = "card-text">
                        { cat['cat-description'] }
                    </p>
                    <ul className = "list-group list-group-flush">
                        <li className = "list-group-item d-flex justify-content-between mx-3 text-start">
                            <strong>Sex</strong>{ cat.sex }
                        </li>
                        <li className = "list-group-item d-flex justify-content-between mx-3 text-start">
                            <strong>Age</strong> { cat['cat-age'] }
                        </li>
                        <li className = "list-group-item d-flex justify-content-between mx-3 text-start">
                            <strong>Sterilized</strong> { cat['is-steralized'] }
                        </li>
                        <li className = "list-group-item d-flex justify-content-between mx-3 text-start">
                            <strong>Gets along with pets</strong> { cat['gets-along-with-pets'] }
                        </li>
                        <li className = "list-group-item d-flex justify-content-between mx-3 text-start">
                            <strong>Gets along with children</strong> { cat['gets-along-with-children'] }
                        </li>
                        {
                            cat['has-special-needs'] === "No"?
                            <li className="list-group-item d-flex justify-content-between mx-3">
                                <strong>Has special needs</strong> { cat['has-special-needs'] }
                            </li>
                            :
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item d-flex justify-content-between mx-3">
                                    <strong>Has special needs</strong> { cat['has-special-needs'] }
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
                </article>
            </section>
        </div>
    </article>
  )
}

SingleCatCard.propTypes = {
    cat: PropTypes.object,
}

export default SingleCatCard