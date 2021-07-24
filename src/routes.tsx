import React, { Suspense } from 'react'
import { Switch, BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import AdminSummary from './components/AdminSummary'
import AddQuestion from './components/AdminSummary/AddQuestion'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import Templates from './components/Templates'
import SearchResults from './components/Templates/SearchResults'
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
          <Route
            path="/admin-summary"
            render={({ match: { path } }) => (
              <AdminSummary>
                <Switch>
                  <Route path={path + '/'} component={AddQuestion} />
                  {/* routes connected to admin summary go here */}
                </Switch>
              </AdminSummary>
            )}
          />
          <Route
            path="/"
            component={Templates}
          />
          <Route> 404 Not Found! </Route>
        </Switch>
        <Footer />
      </Suspense>
    </Router>
  )
}

export default Routes
