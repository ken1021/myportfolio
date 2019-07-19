import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import Contact from './contact';
import Resume from './resume';
import Projects from './projects';


const Main = () => (
  <Switch>
    <Route exact path={process.env.PUBLIC_URL + '/'} component={LandingPage} />
    <Route path={process.env.PUBLIC_URL +"/contact"} component={Contact} />
    <Route path={process.env.PUBLIC_URL +"/resume"} component={Resume} />
    <Route path={process.env.PUBLIC_URL +"/projects"} component={Projects} />
  </Switch>
)

export default Main;
