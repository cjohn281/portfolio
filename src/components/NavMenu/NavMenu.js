import React from 'react';
import { Link } from 'react-router-dom';

import Pdf from '../../resources/resume.pdf';

import './NavMenu.css';

const navMenu = ({click, open}) => {

	let navClass;
	if (open) navClass = "nav-menu open";
	else navClass = "nav-menu";

	return (
		<div className={navClass}>
			<div className="nav-list-container">
				<ul className="nav-list">
					<li>
						<Link to="/" onClick={click}>Home</Link>
					</li>
					<li>
						<Link to="/projects" onClick={click}>Projects</Link>
					</li>
					<li>
						<a href={Pdf} target="_blank" rel="noopener noreferrer"  onClick={click}>Resume/CV</a>
					</li>
					<li>
						<Link to="/contact"  onClick={click}>Contact</Link>
					</li>
				</ul>
			</div>

			<div className="personal-info">
				<span>Christopher Johnson</span>
				<span>Pittsboro, NC</span>
				<span>919-548-9775</span>
			</div>
		</div>
	);
};

export default navMenu;
