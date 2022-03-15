import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Card } from './card';

function App() {
	const type = ['Free', 'Plus', 'Pro'];
	return (
		<div className="App">
			<div className="container card-container">
				{type.map((type) => (
					<Card type={type} />
				))}
			</div>
		</div>
	);
}

export default App;
