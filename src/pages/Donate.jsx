import React from 'react'
import { lorem } from '../dummyData';
import '../styles/pages/donate.scss'

const Donate = () => {
  return (
    <main className='App container-fluid d-flex flex-column align-items-center' style={{ minHeight: '90vh' }} >
      <article className='mb-5 d-flex flex-row justify-content-center flex-wrap' style={{ width: '90%' }}>
        <h1 className='display-1 my-5'>
          Donate
        </h1>
        <p className='px-2'> { lorem.repeat(3) } </p>
        <article className="account-card card">
          <div className="card-body">
            <h5 className="card-title">Dummy bank account 1</h5>
            <h6 className="card-subtitle mb-4 text-muted">Dummy bank</h6>
            <p className="card-text d-flex justify-content-between mx-3"><strong>Account name:</strong> Cat Shelter NGO</p>
            <p className="card-text d-flex justify-content-between mx-3"><strong>Account number:</strong> 410000000000</p>
            <p className="card-text d-flex justify-content-between mx-3"><strong>National id:</strong> 1.111.111.-1</p>
            <p className="card-text d-flex justify-content-between mx-3"><strong>Email:</strong> cat-shelter@shelter.com</p>
          </div>
        </article>
        <article className="account-card card">
          <div className="card-body">
            <h5 className="card-title">Dummy bank account 2</h5>
            <h6 className="card-subtitle mb-4 text-muted">Dummy bank</h6>
            <p className="card-text d-flex justify-content-between mx-3"><strong>Account name:</strong> Cat Shelter NGO</p>
            <p className="card-text d-flex justify-content-between mx-3"><strong>Account number:</strong> 410000000000</p>
            <p className="card-text d-flex justify-content-between mx-3"><strong>National id:</strong> 1.111.111.-1</p>
            <p className="card-text d-flex justify-content-between mx-3"><strong>Email:</strong> cat-shelter@shelter.com</p>
          </div>
        </article>
      </article>
    </main>
  )
}

export default Donate