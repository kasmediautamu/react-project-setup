import React, { Suspense } from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import NewTemplateInfo from './pages/new-template-info'

const Routes: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route 
            exact
            component={NewTemplateInfo}
            path="/new-template-info">
          </Route>
          <Route> 404 Not Found! </Route>
        </Switch>
      </Suspense>
    </Router>
  )
}

export default Routes