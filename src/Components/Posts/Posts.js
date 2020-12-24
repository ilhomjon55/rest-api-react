import { useState, useEffect } from 'react';

function Posts() {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [data, setData] = useState([]);

	const dataSource = 'https://jsonplaceholder.typicode.com/posts';
	useEffect(() => {
		async function getPosts() {
			try {
				const response = await fetch(dataSource);
				const json = await response.json();

				setLoading(false);
				setData(json);
			} catch (error) {
				setError(error);
			}
		}

		getPosts();
	}, [dataSource]);

	return (
		<>
			<h1 className='text-center my-3'>Posts</h1>
			{loading && !error && <h1>Loading...</h1>}
			{error && <>{error.message}</>}
			{data.length > 0 && (
				<ul className='list-unstyled list-group'>
					{data.map((post) => (
						<li className='list-group-item' key={post.id}>
							<p className='text-capitalize font-weight-bold'>
								{post.title}
							</p>
							<p>{post.body}</p>
							<a href={'comments?postId=' + post.id}>More info ...</a>
						</li>
					))}
				</ul>
			)}
		</>
	);
}

export default Posts;
