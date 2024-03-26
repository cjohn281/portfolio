import React from 'react';
import { NavLink } from 'react-router-dom';

import resume from '../../resources/Chris_Johnson_Resume_2020.pdf';

import './NavMenu.css';

const navMenu = ({click, open}) => {
/***************************************************************************************************
Determine which css classes should be applied to the navigation menu
***************************************************************************************************/
	let navClass;
	if (open) navClass = "nav-menu open";
	else navClass = "nav-menu";

	return (
		<div className={navClass}>
			<div className="nav-list-container">
				<ul className="nav-list">
					<li>
						<NavLink
							exact to="/"
							className="navbar-link"
							activeClassName="navbar-link--active"
							onClick={click}
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/projects"
							className="navbar-link"
							activeClassName="navbar-link--active"
							onClick={click}
						>
							Projects
						</NavLink>
					</li>
					<li>
						<a
							href={resume}
							target="_blank"
							rel="noopener noreferrer"
							className="navbar-link"
							activeClassName="navbar-link--active"
							onClick={click}
						>
							Resume/CV
						</a>
					</li>
					<li>
						<NavLink
							to="/contact"
							className="navbar-link"
							activeClassName="navbar-link--active"
							onClick={click}
						>
							Contact
						</NavLink>
					</li>
				</ul>
			</div>

			<div className="personal-info">
				<span>Christopher Johnson</span>
				<span>Phoenix, AZ</span>
				<span>919-548-9775</span>
			</div>
		</div>
	);
};

export default navMenu;
