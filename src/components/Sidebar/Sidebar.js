import React from 'react';

import MenuBtn from '../MenuBtn/MenuBtn';

import './Sidebar.css';

const sidebar = props => (
	<div className="sidebar">
		<div className="hamburger_container">
			<MenuBtn />
		</div>

	</div>
);

export default sidebar;