import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Comments() {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [data, setData] = useState([]);
	const location = useLocation();
	console.log(location);

	const dataSource = `https://jsonplaceholder.typicode.com/comments${location.search}`;

	useEffect(() => {
		async function getComments() {
			try {
				const response = await fetch(dataSource);
				const json = await response.json();

				setLoading(false);
				setData(json);
			} catch (error) {
				setError(error);
			}
		}

		getComments();
	}, [dataSource]);

	return (
		<>
			<h1 className='text-center my-3'>Comments</h1>
			{loading && !error && <h1>Loading...</h1>}
			{error && <>{error.message}</>}
			{data.length > 0 && (
				<ul className='list-unstyled list-group'>
					{data.map((comment) => (
						<li className='list-group-item' key={comment.id}>
							<p>
								<b>Comment title:</b> {comment.name}
							</p>
							<p>
								<b>Comment context:</b> {comment.body}
							</p>
							<span>
								<b>User:</b> {comment.email}
							</span>
						</li>
					))}
				</ul>
			)}
		</>
	);
}

export default Comments;
