import React from 'react';

import ProjectCard from '../ProjectCard/ProjectCard';

import './ProjectList.css';

const projectList = ({projectObjs}) => {

	return (
		<div className="project-list">
			{
				projectObjs.map((project) => {
					return (
						<ProjectCard 
							key={project.id}
							title={project.title}
							imgUrl={project.imgUrl}
							sourceUrl={project.sourceUrl}
							description={project.description}
							tags={project.tags}
						/>
					);
				})
			}
		</div>
	);
}

export default projectList;