import React from 'react'
import SingleImgSectionContainer from '../components/SingleImgSectionContainer';
import { lorem } from '../dummyData';

const AdoptionRequeriments = () => {
  return (
    <main className='App container-fluid d-flex flex-column align-items-center justify-content-center' >
      <article className='mb-5' style={{ width: '90%' }}>
        <h1 className='display-1 my-5'>
          Adoption requeriments
        </h1>
        <SingleImgSectionContainer
          imgUrl='https://images.unsplash.com/photo-1601758066503-27afdf1b9316?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
          content={ lorem.repeat(5) }
        />
        <section>
          <h2 className='display-4 my-5'>General requeriments</h2>
          <ul className="list-group">
            <li className="list-group-item">You must be 18 years of age or older.</li>
            <li className="list-group-item">If you live in an apartment you must have paid any additional security fees and you must be willing to pay any additional rent.</li>
            <li className="list-group-item">Cat and kittens must be taken home in a plastic or cardboard carrier.</li>
            <li className="list-group-item">You must have the proper facilities to maintain and contain your pet before placement.</li>
          </ul>
        </section>
        <section>
          <h2 className='display-4 my-5'>Apply for adoption</h2>
          <ul className="list-group">
            <li className="list-group-item">Your contact information</li>
            <li className="list-group-item">Other people living in the house</li>
            <li className="list-group-item">Information on any other pets</li>
            <li className="list-group-item">Home situation- whether you own or rent</li>
            <li className="list-group-item">Any restrictions on animal ownership where you live</li>
          </ul>
        </section>
        <section>
          <h2 className='display-4 my-5'>Adoption fee</h2>
          <p className='px-2'>
            { lorem.repeat(5) }
          </p>
        </section>
        <section>
          <h2 className='display-4 my-5'>Home visit</h2>
          <p className='px-2'>
            { lorem.repeat(5) }
          </p>
        </section>
        <SingleImgSectionContainer
          imgUrl='https://images.unsplash.com/photo-1601758066681-04e3557afaaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          title='Family meet and greet'
          content={ lorem.repeat(5) }
          reverse
        />        
      </article>
    </main>
  )
}

export default AdoptionRequeriments