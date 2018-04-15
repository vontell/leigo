'use strict';

import React from 'react'
import { Route, IndexRoute } from 'react-router';


import NotFoundPage from './components/NotFoundPage';
import ArchitecturePage from './components/ArchitecturePage';
import ProjectCreation from './components/ProjectCreation';

const routes = (
  <Route path="/" component={ArchitecturePage}>
    
  </Route>
);

export default routes;
