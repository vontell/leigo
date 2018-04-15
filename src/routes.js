'use strict';

import React from 'react'
import { Route, IndexRoute } from 'react-router';

import Layout from './components/Layout';
import NotFoundPage from './components/NotFoundPage';
import ArchitecturePage from './components/ArchitecturePage';
import ProjectCreation from './components/ProjectCreation';
import DeveloperPage from './components/DeveloperPage';

const routes = (

  <Route path="/" component={Layout}>
    <IndexRoute component={ProjectCreation}/>
    <Route path="/architecture" component={ArchitecturePage}/>
    <Route path="/developer" component={DeveloperPage}/>
  </Route>

);

export default routes;