import logo from "./logo.svg";
import "./App.css";
import WordScramble from "./components/word-scramble/word-scramble";
import Countdown from "./components/countdown/countdown";

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
				<WordScramble />
				<Countdown />
			</main>
		</div>
	);
}

export default App;
