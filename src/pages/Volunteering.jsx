import React from 'react';
import SingleImgSectionContainer from '../components/SingleImgSectionContainer';
import { lorem } from '../dummyData';
import '../styles/pages/volunteering.scss'

const Volunteering = () => {
  return (
    <div className='App container-fluid d-flex flex-column align-items-center justify-content-center' >
      <div className='mb-5' style={{ width: '90%' }}>
        <h1 className='display-1 my-5'>
          We need volunteers
        </h1>
        <SingleImgSectionContainer
          imgUrl='https://images.unsplash.com/photo-1596272875729-ed2ff7d6d9c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          content={ lorem.repeat(5) }
        />
        <h2 className='display-4 my-5'>Shelter Cleaning & Feeding Cats</h2>
        <p className='px-2'>
          { lorem.repeat(5) }
        </p>
        <h2 className='display-4 my-5'>Medical Volunteers</h2>
        <p className='px-2'>
          { lorem.repeat(5) }
        </p>
        <h2 className='display-4 my-5'>Adoption buddy</h2>
        <p className='px-2'>
          { lorem.repeat(5) }
        </p>
        <SingleImgSectionContainer
          imgUrl='https://images.unsplash.com/photo-1626544379809-e0031867d50c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80'
          title='Fostering'
          content={ lorem.repeat(5) }
          reverse
        />  
        <p className='lead fs-3'>If you would like to be a part of this community and help, please email us at 
          <a id='mail-to-link' href='mailto:cat-shelter@shelter.com'> cat-shelter@shelter.com</a>.
        </p>      
      </div>
    </div>
  )
}

export default Volunteering