import React, { useState } from 'react';
import CatsPagination from '../components/CatsPagination';
import FilterSearchModal from '../components/FilterSearchModal';
import SingleCatCard from '../components/SingleCatCard';
import { catsData, lorem  } from '../dummyData';
import '../styles/pages/meet-our-cats.scss'

const MeetOurCats = () => {
  const [ cats, setCats ] = useState( catsData );
  const [ filterByAge, setFilterByAge ] = useState( [0, 20] )
  const [ filterBySex, setFilterBySex ] = useState( "" );
  const [ filterBySterilized, setFilterBySterilized ] = useState( "" );
  const [ filterBySpecialNeeds, setFilterBySpecialNeeds ] = useState( "" );
  const [ filterByOtherPets, setFilterByOtherPets ] = useState( "" );
  const [ filterByChildren, setFilterByChildren ] = useState( "" );

  const filters = [
      {
          name: 'Sex',
          value: filterBySex,
          setValue: setFilterBySex,
          option1: 'Female',
          option2: 'Male'
      },
      {
          name: 'Sterilized',
          value: filterBySterilized,
          setValue: setFilterBySterilized,
          option1: 'Yes',
          option2: 'No'
      },
      {
          name: 'Has special needs',
          value: filterBySpecialNeeds,
          setValue: setFilterBySpecialNeeds,
          option1: 'Yes',
          option2: 'No'
      },
      {
          name: 'Gets along with other pets',
          value: filterByOtherPets,
          setValue: setFilterByOtherPets,
          option1: 'Yes',
          option2: 'No'
      },
      {
          name: 'Gets along with children',
          value: filterByChildren,
          setValue: setFilterByChildren,
          option1: 'Yes',
          option2: 'No'
      },
  ]
  
  return (
    <div className="App meet-our-cats">
      <h1 className='display-1'> Give a cat a home </h1>
      <p> { lorem.repeat(3) } </p>
      <div className='container-fluid d-flex flex-column'>
        <nav className="filter-nav navbar">
          <div className="filter-nav-container container-fluid d-flex justify-content-between align-items-center px-5">
            <form className="d-flex m-3" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-dark" type="submit">
                Search
              </button>
            </form>
            <button type="button" className="btn btn-dark m-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Filter
            </button>
          </div>
        </nav>
        <FilterSearchModal 
          filters = { filters } 
          setFilterByAge = { setFilterByAge } 
          filterByAge = { filterByAge } 
        />
        <div className='cats-container container-fluid bg-white p-2 d-flex flex-row align-items-stretch justify-content-evenly flex-wrap'>
          {  
            cats.map( ( cat, index ) => {
                return(
                  <SingleCatCard cat = { cat } key = { `cat ${ index }`} />
                )
              }
            )
          }
        </div>
        <CatsPagination />
      </div>
    </div>
  )
}

export default MeetOurCats