import React from 'react'
import SocialMedia from '../components/SocialMedia'
import { lorem } from '../dummyData'

const Contact = () => {
  return (
    <main className='App container-fluid d-flex flex-column align-items-center' style={{ minHeight: '90vh' }} >
      <div className='mb-5 d-flex flex-column justify-content-center align-items-center flex-wrap' style={{ width: '90%' }}>
        <h1 className='display-1 my-5'>
          Contact us
        </h1>
        <p className='px-2'>
            { lorem.repeat(3) }
        </p>
        <section className='d-flex flex-column justify-content-center col-9 my-5'>
          <SocialMedia size='xxl' color='#000000'/>
        </section>
        <section className='my-5'>
          <p className='lead fs-3'>If you would like to be a part of this community and help, please email us at 
            <a id='mail-to-link' href='mailto:cat-shelter@shelter.com'> cat-shelter@shelter.com</a>.
          </p>  
        </section>
      </div>
    </main>
  )
}

export default Contact