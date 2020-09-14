import React from 'react';

import SearchBox from '../SearchBox/SearchBox';
import ProjectList from '../ProjectList/ProjectList';

import './Projects.css';

const projects = props => {

	return (
		<div className="projects-content">
			<h1 className="projects-heading">Projects</h1>
			<SearchBox />
			<ProjectList />
		</div>
	);
}

export default projects;