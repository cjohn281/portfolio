import React from 'react';

import MenuBtn from '../MenuBtn/MenuBtn';

import './Sidebar.css';

const sidebar = ({sidePanelToggleClickHandler, open}) => (
	<div className="sidebar">
		<MenuBtn sidePanelToggleClickHandler={sidePanelToggleClickHandler} open={open} />

		<ul className="social-list">
			<li>
				<a href="https://www.linkedin.com/in/christopher-johnson-301433b9" target="_blank" rel="noopener noreferrer" className="social-links">
					<i className="fab fa-linkedin"></i>
				</a>
			</li>
			<li>
				<a href="https://github.com/cjohn281" target="_blank" rel="noopener noreferrer" className="social-links">
					<i className="fab fa-github"></i>
				</a>
			</li>
			<li>
				<a href="https://stackexchange.com/users/15732950/chris-johnson" target="_blank" rel="noopener noreferrer" className="social-links">
					<i className="fab fa-stack-overflow"></i>
				</a>
			</li>
		</ul>

		<div className="sidebar-date">
			{new Date().getFullYear()}
		</div>
	</div>
);

export default sidebar;
