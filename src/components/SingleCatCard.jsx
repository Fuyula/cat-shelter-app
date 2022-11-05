import React from 'react'

const SingleCatCard = ({cat, index}) => {
  return (
    <div class="card mx-2 mt-5 d-flex flex-column">
        <div class="row g-0 d-flex flex-grow-1">
            <div class="col-lg-5">
                <img 
                    src={ cat['image-url'] }
                    class="img-fluid"
                    alt="..."
                    style={{ height: '100%', objectFit: 'cover'}}
                />
            </div>
            <div class="col-lg-7">
                <div class="card-body py-4 px-1">
                    <h5 class="card-title">{ cat['cat-name'] }</h5>
                    <p class="card-text">
                        { cat['cat-description'] }
                    </p>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item d-flex justify-content-between mx-3 text-start"><b>Sex</b>{cat.sex}</li>
                        <li class="list-group-item d-flex justify-content-between mx-3 text-start"><b>Age</b> {cat['cat-age']}</li>
                        <li class="list-group-item d-flex justify-content-between mx-3 text-start"><b>Sterilized</b> {cat['is-steralized']}</li>
                        <li class="list-group-item d-flex justify-content-between mx-3 text-start"><b>Gets along with pets</b> { cat['gets-along-with-pets']}</li>
                        <li class="list-group-item d-flex justify-content-between mx-3 text-start"><b>Gets along with children</b> { cat['gets-along-with-children']}</li>
                        {
                            
                        cat['has-special-needs'] === "No"?
                        <li class="list-group-item d-flex justify-content-between mx-3"><b>Has special needs</b> { cat['has-special-needs']}</li>
                        :
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item d-flex justify-content-between mx-3"><b>Has special needs</b> { cat['has-special-needs']}</li>
                            { cat['special-needs'].map((affliction) => {
                                    return (
                                    <li class="list-group-item"> {affliction} </li>
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

export default SingleCatCard