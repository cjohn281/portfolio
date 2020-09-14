import React from 'react';

import './Footer.css';

const footer = props => (
	<div className="footer">
		<p><span className="cr">&copy;</span> Christopher Johnson. {new Date().getFullYear()}.</p>
		<p>Built with <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><span className="react"><i className="fab fa-react"></i> React</span></a></p>
	</div>
);

export default footer;
