import React from 'react';

import './MenuBtn.css';

const menuBtn = ({sidePanelToggleClickHandler, open}) => {
	let line1, line2, line3;
	if (open) {
		line1="line line-1-open";
		line2="line line-2-open";
		line3="line line-3-open";
	}
	else {
		line1="line line-1-closed";
		line2="line line-2-closed";
		line3="line line-3-closed";
	} 

	return (
		<div className="menuBtn" onClick={sidePanelToggleClickHandler} >
			<div className={line1} />
			<div className={line2} />
			<div className={line3} />
		</div>
	);
};

export default menuBtn;
