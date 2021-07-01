// LIBRARY
import React from 'react';
import { Link } from 'react-router-dom';

// STYLE
import '../style/css/add.css';

const NotFound = (props) => {
	return (
		<section className="section section--not-found">
			<div className="container">
				<h2 className="not-found">Page Not<br/>Found</h2>

				<Link to="/">
					<button className="btn btn--not-found">메인 페이지로 돌아가기</button>
				</Link>
			</div>
		</section>
	);
};

export default NotFound;
