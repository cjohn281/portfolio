import React from 'react';

import './ProjectCard.css';

const projectCard = ({key, title, sourceUrl, description, tags}) => {

	return (
		<div className="card-container">
			<div><h3 className="project-title">{title}</h3></div>
			<img src={`./img/${title.toLowerCase().replace(/\s/g, "")}.JPG`} alt={title} />
			<div className="project-info">
				<div className="description">Description
					<span className="description-text">{description}</span>
				</div>
				<div><a href={sourceUrl} target="_blank"  rel="noopener noreferrer">Source Code</a></div>
			</div>
			<div className="project-tags">
				{
					tags.map((tag, i) => {
						return (
							<span
								key={`tag${i}`}
								className="tag"
							>
								{tag}
							</span>
						);
					})
				}
			</div>
		</div>
	);
}

export default projectCard;