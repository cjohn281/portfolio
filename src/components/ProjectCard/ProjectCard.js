import React from 'react';

import './ProjectCard.css';

const projectCard = ({key, title, imgUrl, sourceUrl, description, tags}) => {

	return (
		<div className="card-container">
			<div><h3 className="project-title">{title}</h3></div>
			<img src={`https://robohash.org/${title}?200x200`} alt="robo" />
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
								key={i}
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