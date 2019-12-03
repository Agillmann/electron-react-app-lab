import React from 'react'
import { withRouter, Switch, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './components/HomePage'
import NotFoundPage from './components/NotFoundPage'

const App = ({ location }) => {  
  return (
  	<Layout>
      <Switch location={location}>
        <Route path="/" exact component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Layout>
  )
}

export default withRouter(App)