import React, { useState } from 'react';
import { TwoThumbInputRange } from 'react-two-thumb-input-range';
import BooleanRadioButton from '../components/BooleanRadioButton';
import SingleCatCard from '../components/SingleCatCard';
import '../styles/pages/meet-our-cats.scss'

const MeetOurCats = () => {
  const lorem = `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Quos non distinctio ad, nam atque optio facilis deserunt ducimus consequatur 
        alias expedita esse doloremque sed dicta ipsa repellat dignissimos mollitia corrupti!
    `
  const [ cats, setCats ] = useState([
    { 
      'cat-name': "Maurice",
      'cat-description': lorem,
      'cat-age': '3 years',
      'image-url': "https://images.unsplash.com/photo-1606225457115-9b0de873c5db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      'is-steralized': 'Yes',
      'sex': 'Male',
      'gets-along-with-pets': 'Yes',
      'gets-along-with-children': 'No',
      'has-special-needs': 'Yes',
      'special-needs': ['FIV+', 'Diabetes']

    },
    { 
      'cat-name': "Oliver",
      'cat-description': lorem,
      'cat-age': '2 years',
      'image-url': "https://images.unsplash.com/photo-1518288774672-b94e808873ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=738&q=80",
      'is-steralized': 'No',
      'sex': 'Male',
      'gets-along-with-pets': 'No',
      'gets-along-with-children': 'No',
      'has-special-needs': 'No',
      'special-needs': []

    },
    { 
      'cat-name': "Nala",
      'cat-description': lorem,
      'cat-age': '8 years',
      'image-url': "https://images.unsplash.com/photo-1503777119540-ce54b422baff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
      'is-steralized': 'No',
      'sex': 'Female',
      'gets-along-with-pets': 'Yes',
      'gets-along-with-children': 'Yes',
      'has-special-needs': 'Yes',
      'special-needs': ['FIV+']

    },
    { 
      'cat-name': "Lola",
      'cat-description': lorem,
      'cat-age': '1 year',
      'image-url': "https://images.unsplash.com/photo-1607242792481-37f27e1d74e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      'is-steralized': 'Yes',
      'sex': 'Female',
      'gets-along-with-pets': 'Yes',
      'gets-along-with-children': 'Yes',
      'has-special-needs': 'No',
      'special-needs': []

    },
  ])
  const [value, setValue] = useState([0, 20])
  const [filterBySex, setFilterBySex ] = useState("");
  const [filterBySterilized, setFilterBySterilized ] = useState("");
  const [filterBySpecialNeeds, setFilterBySpecialNeeds] = useState("");
  const [filterByOtherPets, setFilterByOtherPets] = useState("");
  const [filterByChildren, setFilterByChildren] = useState("");
  const onValueChange = (values) => {
    setValue(values)
  }
  
  return (
    <div className="App meet-our-cats">
      <h1 className='display-1'>Give a cat a home</h1>
      <p>
          { lorem.repeat(3) }
      </p>
      <div className='container-fluid d-flex flex-column'>
      <nav class="filter-nav navbar">
        <div class="filter-nav-container container-fluid d-flex justify-content-between align-items-center px-5">
          <form class="d-flex m-3" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-dark" type="submit">Search</button>
          </form>
          <button type="button" class="btn btn-dark m-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Filter
          </button>
        </div>

      </nav>
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-md">
              <div class="modal-content container-fluid">
                <div class="modal-header container-fluid">
                  <h1 class="display-6 text-center" id="exampleModalLabel">Filter</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body container-fluid">
                  <form className="container-fluid d-flex flex-column justify-content-evenly mb-4">
                    <label for="customRange2" class="form-label m-4 fw-semibold">Age (years)</label>
                    <TwoThumbInputRange 
                      onChange={onValueChange} 
                      values={value} 
                      min={0} 
                      max={20} 
                      inputStyle={{ width: '220px', display: 'flex', flexDirection: 'column', alignSelf: 'center'}}
                      trackColor={'#adb5bd'}
                      thumbColor={'#000'}
                      labelStyle= {{ backgroundColor: '#adb5bd'}}
                    />
                    <label for="customRange2" class="form-label m-4 fw-semibold">Sex</label>
                    <BooleanRadioButton value1='Female' value2='Male' value={ filterBySex } setValue={ setFilterBySex } />
                    <label for="customRange2" class="form-label m-4 fw-semibold">Sterilized</label>
                    <BooleanRadioButton value1='Yes' value2='No' value={ filterBySterilized } setValue={ setFilterBySterilized } />
                    <label for="customRange2" class="form-label m-4 fw-semibold">Special needs</label>
                    <BooleanRadioButton value1='Yes' value2='No' value={ filterBySpecialNeeds } setValue={ setFilterBySpecialNeeds } />
                    <label for="customRange2" class="form-label m-4 fw-semibold">Gets along with other pets</label>
                    <BooleanRadioButton value1='Yes' value2='No' value={ filterByOtherPets } setValue={ setFilterByOtherPets } />
                    <label for="customRange2" class="form-label m-4 fw-semibold">Gets along with children</label>
                    <BooleanRadioButton value1='Yes' value2='No' value={ filterByChildren } setValue={ setFilterByChildren } />
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-dark">Save changes</button>
                </div>
              </div>
            </div>
          </div>
      <div className='cats-container container-fluid bg-white p-2 d-flex flex-row align-items-stretch justify-content-evenly flex-wrap'>
        {  
        cats.map( (cat, index) => {
            return(
              <SingleCatCard cat = { cat } index = { index } />
              )
            }
          )
        }
        </div>
        <nav aria-label="Page navigation example" className='m-5'>
          <ul class="pagination justify-content-center">
            <li class="page-item disabled">
              <a class="page-link bg-dark text-light">Previous</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link  bg-dark text-light" href="#">Next</a>
            </li>
          </ul>
      </nav>
      </div>
    </div>
  )
}

export default MeetOurCats