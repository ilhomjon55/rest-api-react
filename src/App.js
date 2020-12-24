import { Switch, Route } from 'react-router-dom';

import Posts from './Components/Posts/Posts.js';
import Comments from './Components/Comments/Comments.js';

function App() {
	return (
		<>
			<div className='container'>
				<Switch>
					<Route path='/' exact>
						<Posts />
					</Route>
					<Route>
						<Comments />
					</Route>
				</Switch>
			</div>
		</>
	);
}

export default App;
