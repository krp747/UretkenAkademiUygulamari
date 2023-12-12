import React from 'react';
export default function PostPreview({ title, subtitle, author, date , link}) {
	return (
		<>
			<div className="post-preview">
				<a href={link} target='_blank'>
					<h2 className="post-title">
						{title}
					</h2>
					<h3 className="post-subtitle">
						{subtitle}
					</h3>
				</a>
				<p className="post-meta">
					Posted by <a href="#!">{author}</a> on {date}
				</p>
			</div>
			<hr className="my-4" />
		</>
	);
}