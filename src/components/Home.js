import React from 'react'
import { BrowserRouter, Router, Route, Link } from 'react-router-dom'
import Houses from './Houses'

const Home = () => (

  <div>
    <Link to="/houses/">
      <img src={require('../images/got.jpeg')} /> Enter Here
    </Link>

  </div>
)

export default Home
