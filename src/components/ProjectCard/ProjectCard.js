import React from 'react';

import './ProjectCard.css';

const projectCard = props => {


	return (
		<div className="card-container">
			<div><h3 className="project-title">Title</h3></div>
			<img src="https://robohash.org/test?200x200" alt="robo" />
			<div className="project-info">
				<div>Description</div>
			</div>
			<div className="project-tags">
				<span className="tag">Tag</span>
				<span className="tag">Tag</span>
				<span className="tag">Tag</span>
				<span className="tag">Tag</span>
				<span className="tag">Tag</span>
				<span className="tag">Tag</span>
				<span className="tag">Tag</span>
			</div>
		</div>
	);
}

export default projectCard;