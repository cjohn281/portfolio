import React from 'react';

import './Home.css';
import profileImage from '../../resources/img/me1.jpg';

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

			</div>
			<div className="home-contact">

			</div>
		</div>
	);
}

export default home;