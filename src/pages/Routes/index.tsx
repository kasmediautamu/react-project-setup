import React, { Suspense } from 'react'
import { Switch, BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Navigation from '../../components/Navigation'
import Templates from '../../components/Templates'
import TemplatesList from '../../components/Templates/TemplatesList'
import TemplatesPDF from '../../components/Templates/TemplatesPDF'

const Routes:React.FC =()=>{
    return(
        <Router>
            <Suspense fallback={<h1>Loading the App...</h1>}>
                <Navigation/>

                <Switch>
                    <Route path="/" 
                    render={({match:{path}})=>(
                        <Templates>
                            <Switch>
                                <Route
                                exact
                                path={path+"/"}
                                component={TemplatesPDF}
                                />
                                <Route path={`/templates-list`} component={TemplatesList}/>
                                <Redirect exact from={path+"/*"} to={path}/>
                            </Switch>
                        </Templates>
                    )}
                    />
                </Switch>
            </Suspense>
        </Router>
    )
}
export default Routes