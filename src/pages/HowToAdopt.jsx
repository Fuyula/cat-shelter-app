import React from 'react'
import SingleImgSectionContainer from '../components/SingleImgSectionContainer'
import { lorem } from '../dummyData'

const HowToAdopt = () => {
  return (
    <div className='App container-fluid d-flex flex-column align-items-center justify-content-center' >
      <div style={{ width: '90%' }}>
        <h1 className='display-1 my-5'>How to adopt?</h1>
        <SingleImgSectionContainer 
          imgUrl='https://images.unsplash.com/photo-1601758003081-cc85332409de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
          title='Should I adopt a cat?'
          content={ lorem.repeat(5) }
        />
        <SingleImgSectionContainer 
          imgUrl='https://images.unsplash.com/photo-1415369629372-26f2fe60c467?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
          title='How long does it take to adopt a cat?'
          content={ lorem.repeat(5) }
          reverse
        />
      </div>
    </div>
      
      
  )
}

export default HowToAdopt