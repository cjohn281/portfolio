import React from 'react';

import ProjectCard from '../ProjectCard/ProjectCard';

import './ProjectList.css';

const projectList = props => {
	return (
		<div className="project-list">
			<ProjectCard />
			<ProjectCard />
			<ProjectCard />
		</div>
	);
}

export default projectList;