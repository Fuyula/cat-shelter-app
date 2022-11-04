import React, { useState } from 'react';
import '../styles/components/carousel.scss'

const Carousel = () => {
    const [cats, setCats ] = useState([
        {
            'cat-name': "Milo", 
            'cat-age': '7 years',
            'image-url': 'https://images.unsplash.com/photo-1511044568932-338cba0ad803?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        },
        {
            'cat-name': "Sandy",
            'cat-age': '3 years',
            'image-url': 'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        },
        {
            'cat-name': "Luna",
            'cat-age': '1 year',
            'image-url': 'https://images.unsplash.com/photo-1511275539165-cc46b1ee89bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        },
    ])
  return (
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
        <div class="carousel-indicators">
            {
                cats.map( (_, index) => {
                    return(
                        <button 
                            type="button" 
                            data-bs-target="#carouselExampleCaptions" 
                            data-bs-slide-to={ index.toString() } 
                            className={ index === 0 && "active" } 
                            aria-current={ index === 0 && "true" } 
                            aria-label={ `Slide ${index}` }
                        />
                    )
                })
            }
        </div>
        <div class="carousel-inner">
            {
                cats.map( (cat, index) => {
                    return(
                        <div class={`carousel-item ${index === 0 &&'active'}`}>
                            <img src={ cat['image-url'] } class="d-block w-100" alt={ cat['cat-name']}/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>{ cat['cat-name'] }</h5>
                                <p>{ cat['cat-age'] }</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
  )
}

export default Carousel