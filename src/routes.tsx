import React, { Suspense } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import AboutUs from './pages/About';
import Home from './pages/Home';
import Back from './pages/Layout/back';
import Front from './pages/Layout/front';

// eslint-disable-next-line react/prop-types
const AppRouter = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
);

const Routes: React.FC = () => (
  <Router>
    <Suspense fallback={<h1>Loading...</h1>}>
      <Switch>
        <AppRouter path="/about" layout={Back} component={AboutUs} />
        <AppRouter path="/" layout={Front} component={Home} />
      </Switch>
    </Suspense>
  </Router>
);

export default Routes;
