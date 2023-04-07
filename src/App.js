import logo from "./logo.svg";
import "./App.css";
import { TicTacToe } from "./components/tic-tac-toe/tic-tac-toe";

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<h2>
					Time to Code <span className='small'> with</span>
				</h2>
				<img src={logo} className='App-logo' alt='logo' />
			</header>
			<main>
				<TicTacToe />
			</main>
		</div>
	);
}

export default App;
