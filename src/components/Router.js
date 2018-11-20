import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Houses from './Houses'

const Router = () => (

  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path="/houses/" component={Houses} />
      <Route path="/houses/:id" />
      <Route path="/houses/:hid/members" />
      <Route path="houses/:hid/members/:id" />
    </Switch>

  </BrowserRouter>

)

export default Router
