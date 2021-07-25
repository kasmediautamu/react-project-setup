import React, { Suspense } from 'react'
import { Switch, BrowserRouter as Router } from 'react-router-dom'


const Routes: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<h1>Loading...</h1>}>
        
        <Switch>
          
        </Switch>
        
      </Suspense>
    </Router>
  )
}

export default Routes
