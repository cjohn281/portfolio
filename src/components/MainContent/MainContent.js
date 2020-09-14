import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../ContentPages/Home';
import Projects from '../ContentPages/Projects';
import Contact from '../ContentPages/Contact';

import './MainContent.css';

const mainContent = props => {

	return (
		<div className="content-container">
			<Switch>
        <Route path="/" component={Home} exact />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route component={Error} />
      </Switch>
		</div>
	);

}

export default mainContent;