import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../Header/Header';
import Home from '../ContentPages/Home';
import Projects from '../ContentPages/Projects';
import Contact from '../ContentPages/Contact';

import './MainContent.css';

const mainContent = ({searchChange, projectObjs}) => {

  return (
    <div className="content-container">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />

        <Route
	     path="/projects"
	     render={() => (<Projects searchChange={searchChange} projectObjs={projectObjs} />)}
        />

        <Route path="/contact" component={Contact} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default mainContent;