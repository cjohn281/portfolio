import React from 'react';

import './Home.css';
import profileImage from '../../resources/img/profile.jpg';

const home = props => {

	return (
		<div className="home-content">
			<div className="home-heading">
				<div className="home-heading-img">
					<img src={profileImage} alt="profile" />
				</div>
				<div className="home-heading-content">
					<h1>Christopher Johnson</h1>
					<h3>Programmer.</h3>
					<h4>Baker.</h4>
					<h5>Music guy.</h5>
					<h6>Animal enthusiast.</h6>
				</div>
				<div className="spacer" />
			</div>
			<div className="home-body">
				<p>
					Hello! Thank you for checking out my site.  My name is Christopher Johnson. I graduated from the University of North Carolina at Charlotte in 2013 with a Bachelor of Science in Computer Science, with a focus on application software development.  I've since also expanded my skillset to include web and mobile application development.
				</p>
				<p>
					I am always excited to learn new technologies and I am excited for the opportunity to improve my skills and knowledge by working with a team of other developers.  My resume, recent projects and contact information can be viewed from the navigation menu.  Thank you for taking the time to look over my portfolio!
				</p>
			</div>
			<div className="home-contact">
				<div>cjohn281@outlook.com</div>
				<div>919-548-9775</div>
			</div>
		</div>
	);
}

export default home;