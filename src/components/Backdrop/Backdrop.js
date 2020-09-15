import React from 'react';

import './Backdrop.css';

const backdrop = ({sidePanelToggleClickHandler, open}) => {
/***************************************************************************************************
Determine which css className should be applied to Backdrop
***************************************************************************************************/
	let backdropClass;
	if (open) backdropClass = "backdrop open";
	else backdropClass = "backdrop";

	return (
		<div className={backdropClass} onClick={sidePanelToggleClickHandler} />
	);

};

export default backdrop;
