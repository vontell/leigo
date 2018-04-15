'use strict';

import React from 'react'
import { Route, IndexRoute } from 'react-router';

import Layout from './components/Layout';
import NotFoundPage from './components/NotFoundPage';
import ArchitecturePage from './components/ArchitecturePage';
import ProjectCreation from './components/ProjectCreation';

const routes = (

  <Route path="/" component={Layout}>
    <IndexRoute component={ProjectCreation}/>
    <Route path="/architecture" component={ArchitecturePage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>

);

export default routes;