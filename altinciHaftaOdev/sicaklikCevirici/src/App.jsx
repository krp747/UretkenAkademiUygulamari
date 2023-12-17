import React, { useState } from "react";
import "./App.css";

function App() {
	const [userInput, setUserInput] = useState("");
	const [type, setType] = useState("fahrenheit");
	const [result, setResult] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	function handleConvert() {
		function olmadi(errorMessage) {
			setResult("");
			document.querySelector("#errorMessage").style.display = "block";
			setErrorMessage(errorMessage);
			setUserInput("");
			userInputRef.current.focus();
		}

		if (userInput.trim() !== "") {
			const userInputNumber = Number(userInput.trim());
			const selectedType = type;
			let calculation;

			if (!isNaN(userInputNumber)) {
				setErrorMessage("");
				switch (selectedType) {
					case "fahrenheit":
						calculation = (userInputNumber * 9) / 5 + 32;
						break;
					case "kelvin":
						calculation = userInputNumber + 273.15;
						break;
					default:
						olmadi("Lütfen bir dönüştürme türü seçin");
						return;
				}
				setResult(calculation);
			} else {
				olmadi("Geçersiz giriş. Lütfen sayısal bir değer girin.");
			}
		} else {
			olmadi("Lütfen bir değer girin.");
		}
	}

	const userInputRef = React.createRef();

	return (
		<div className="container">
			<h1>Sıcaklık çevirici</h1>
			<p>Derece cinsinden bir değer giriniz</p>
			<input
				type="text"
				id="userInput"
				value={userInput}
				onChange={e => setUserInput(e.target.value)}
				ref={userInputRef}
			/>
			<p id="errorMessage">{errorMessage}</p>
			<p>
				Çevir
				<select
					id="type"
					value={type}
					onChange={e => setType(e.target.value)}>
					<option value="fahrenheit">Fahrenheit</option>
					<option value="kelvin">Kelvin</option>
				</select>
			</p>
			<p id="result">{result}</p>
			<button
				type="button"
				id="convertBtn"
				onClick={handleConvert}>
				Çevir
			</button>
		</div>
	);
}

export default App;
