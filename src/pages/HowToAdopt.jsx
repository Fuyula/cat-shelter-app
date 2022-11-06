import React from 'react'
import { lorem } from '../dummyData'
import '../styles/pages/how-to-adopt.scss'

const HowToAdopt = () => {
  return (
    <div className='App container-fluid d-flex flex-column align-items-center justify-content-center' >
      <div style={{ width: '90%' }}>
        <h1 className='display-1 my-5'>How to adopt?</h1>
        <div className='container-fluid row d-flex flex-row align-items-centerc mt-3 mb-5'>
          <div className='col d-flex flex-column align-items-center justify-content-center'>
              <img
                className='how-to-adopt-img p-2'
                src='https://images.unsplash.com/photo-1601758003081-cc85332409de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' 
              />
          </div>
          <div className='col d-flex flex-column align-items-center justify-content-center'>
              <h2 className='display-4 my-5'>Should I adopt a cat?</h2>
              <p> { lorem.repeat(5) }</p>
            </div>
        </div>
        <div className='container-fluid row d-flex flex-row align-items-center justify-content-center mb-5'>
          <div className='col d-flex flex-column align-items-center'>
            <h2 className='display-4 my-5'>How long does it take to adopt a cat?</h2>
            <p> { lorem.repeat(5) }</p>
          </div>
          <div className='col d-flex flex-column align-items-center justify-content-center'>
            <img
                className='how-to-adopt-img p-2'
                src='https://images.unsplash.com/photo-1415369629372-26f2fe60c467?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' 
              />
          </div>
        </div>
      </div>
    </div>
      
      
  )
}

export default HowToAdopt