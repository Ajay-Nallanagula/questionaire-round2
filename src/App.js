import './App.css';
import Home from './components/Home';
import Questionnaire from './components/Questionnaire';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<Router>
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/questionnaire' exact component={Questionnaire} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
