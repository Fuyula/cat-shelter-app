import React from 'react'
import Carousel from '../components/Carousel'
import '../styles/pages/home.scss'

const Home = () => {
    const lorem = `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Quos non distinctio ad, nam atque optio facilis deserunt ducimus consequatur 
        alias expedita esse doloremque sed dicta ipsa repellat dignissimos mollitia corrupti!
    `
  return (
    <div className="App home">
        <Carousel />
        <div className='home-shelter-description'>
            <h1 className='display-1'>Cat Shelter</h1>
            <p>
                { lorem.repeat(5) }
            </p>
        </div>
        <div className='home-shelter-about'>
            <div className='home-shelter-about-image'>
                <img src="https://images.unsplash.com/photo-1597838816882-4435b1977fbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=849&q=80" />
            </div>
            <div className='home-shelter-about-image-description'>
                <h1 className='display-1'>About</h1>
                <p>
                    { lorem.repeat(5) }
                </p>
            </div>
        </div>
        
    </div>
  )
}

export default Home