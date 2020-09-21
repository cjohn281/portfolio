import React from 'react';

import ProjectCard from '../ProjectCard/ProjectCard';

import './ProjectList.css';

const projectList = ({projectObjs}) => {

/***************************************************************************************************
The ProjectList component dynamically builds a list of project cards
	by taking input from the searchbar and filtering through the array
	of project objects to only create cards for objects that match the
	search criteria.
***************************************************************************************************/

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