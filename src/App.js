import { Switch, Route } from 'react-router-dom';

import Posts from './Components/Posts/Posts.js';
import Comments from './Components/Comments/Comments.js';

function App() {
	return (
		<>
			<div className='container'>
				<Switch>
					<Route path='/' component={Posts} exact />
					<Route path='/comments' component={Comments} exact />
				</Switch>
			</div>
		</>
	);
}

export default App;
