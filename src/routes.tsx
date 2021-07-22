import React, { Suspense } from 'react'
import { Switch, BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import Templates from './components/Templates'
import TemplatesList from './components/Templates/TemplatesList'
import TemplatesPDF from './components/Templates/TemplatesPDF'
import NewTemplateInfo from './pages/NewTemplateInfo'

const Routes: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Navigation />
        <Switch>
          <Route component={NewTemplateInfo} path="/new-template-info" />
          <Route path="/"
            render={({ match: { path } }) => (
              <Templates>
                <Switch>
                  <Route
                    exact
                    path={path + "/"}
                    component={TemplatesPDF}
                  />
                  <Route path={`/templates-list`} component={TemplatesList} />
                  
                  <Redirect exact from={path + "/*"} to={path} />
                </Switch>
              </Templates>
            )}
          />

          <Route> 404 Not Found! </Route>
        </Switch>
        <Footer/>
      </Suspense>
    </Router>
  )
}

export default Routes