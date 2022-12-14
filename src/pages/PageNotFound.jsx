import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../assets/404.json';
import '../styles/pages/page-not-found.scss';

const PageNotFound = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    };
  return (
    <main className='container-fluid d-flex flex-column align-items-center justify-content-center'>
        <article className='container-fluid d-flex flex-column align-items-center justify-content-center' style={{ minHeight: '80vh'}}>
            <h1 className='display-1 m-5'>PageNotFound </h1>
            <figure className='container-fluid d-flex flex-column align-items-center justify-content-center' id = "lottie-animation">
                <Lottie 
                    options={defaultOptions}
                />
            </figure>
        </article>
    </main>
  )
}

export default PageNotFound