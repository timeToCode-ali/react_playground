import React, { useState, useEffect } from "react";
import "./word-scramble.sass";

const WORDS = [
	"React",
	"Next",
	"Website",
	"Engineer",
	"TypeScript",
	"Developer",
	"dream Job",
	"Time to code",
];

const WordScramble = () => {
	const [isPlayOn, setPlayOn] = useState(false);
	const [inputValue, setInputValue] = useState("");

	const [correctWord, setCorrectWord] = useState("");
	const [scrambledWord, setScrambledWord] = useState("");
	const [message, setMessage] = useState("");

	const handleInputChange = (event) => {
		setInputValue(event.target.value.toUpperCase());
	};

	const selectWord = () => {
		const randomIndex = Math.floor(Math.random() * WORDS.length);
		const tempWord = WORDS[randomIndex];
		return tempWord;
	};

	const handleButtonClick = () => {
		if (inputValue !== "") {
			if (correctWord === inputValue) {
				setMessage("Corret Answer");
			} else {
				setMessage("Wrong Answer");
			}
		}
	};

	const handleStartGame = () => {
		setPlayOn(true);
		setInputValue("");
		setMessage("");

		const word = selectWord().toUpperCase();
		setCorrectWord(word);
		//setScrambledWord(constructScrambledWord(word));
		setScrambledWord(constructScrambledWordModernJS(word));
	};

	const constructScrambledWordModernJS = (word) => {
		const shuffledArray = word.split("").reduce(
			(newArr, _, i) => {
				const j = Math.floor(Math.random() * (i + 1));
				[newArr[i], newArr[j]] = [newArr[j], newArr[i]];
				return newArr;
			},
			[...word]
		);
		return shuffledArray.join("");
	};

	const constructScrambledWord = (word) => {
		const shuffledArray = word.split("");
		for (let i = shuffledArray.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));

			shuffledArray[i] = shuffledArray[j];
			shuffledArray[j] = shuffledArray[i];
			//[shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
		}
		return shuffledArray.join("");
	};

	useEffect(() => {
		let clearMessage;
		if (message === "Wrong Answer") {
			clearMessage = setTimeout(() => setMessage(""), [800]);
		}

		return () => {
			clearTimeout(clearMessage);
		};
	}, [message]);

	return (
		<div className='word_scramble'>
			{!!message && (
				<div className='message'>
					<p> {message}</p>
				</div>
			)}

			<h1> Word Scramble</h1>
			<div className='content'>
				<div className='board'>
					{correctWord.split("").map((el, i) => (
						<span key={`${el}_${i}`} className='square_bg'>
							{" "}
							{inputValue[i]}{" "}
						</span>
					))}
				</div>
				<p className='scrambled_word'>{scrambledWord}</p>

				{isPlayOn ? (
					<div className='field'>
						<input
							type='text'
							value={inputValue}
							onChange={handleInputChange}
						/>
						<button type='button' onClick={handleButtonClick}>
							Enter
						</button>
					</div>
				) : (
					<button
						className='start_game'
						type='button'
						onClick={handleStartGame}
					>
						Start Game
					</button>
				)}

				{isPlayOn && (
					<button
						className='start_game new'
						type='button'
						onClick={handleStartGame}
					>
						New Game
					</button>
				)}
			</div>
		</div>
	);
};

export default WordScramble;
