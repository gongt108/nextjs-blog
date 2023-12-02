import React from 'react';
import Link from 'next/link';

// Data here
const array = ['HTML', 'CSS', 'JavaScript', 'EJS', 'Bootstrap', 'SQL', 'Node'];

function FirstPost() {
	const skillsArray = array.map((s, idx) => {
		return <p key={idx}>{s}</p>;
	});
	return (
		<div>
			<h1>First Post</h1>
			<p>Something small</p>
			<p>I learned {array[6]} for server-side rendering.</p>
			<Link href="/">Home Page</Link>
			<div>
				I have learned the following concepts:
				{skillsArray}
			</div>
		</div>
	);
}

export default FirstPost;
