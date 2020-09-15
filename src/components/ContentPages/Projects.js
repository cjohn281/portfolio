import React from 'react';

import SearchBox from '../SearchBox/SearchBox';
import ProjectList from '../ProjectList/ProjectList';

import './Projects.css';

const projects = ({searchChange, projectObjs}) => {

	return (
		<div className="projects-content">
			<h1 className="projects-heading">Projects</h1>
			<SearchBox searchChange={searchChange} />
			<ProjectList projectObjs={projectObjs} />
		</div>
	);
}

export default projects;