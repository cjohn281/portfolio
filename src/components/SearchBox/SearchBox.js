import React from 'react';

import './SearchBox.css';

const searchBox = ({searchChange}) => {

	return (
		<input type="search" placeholder="Search Projects..." className="searchbox" onChange={searchChange}/>
	);
}

export default searchBox;