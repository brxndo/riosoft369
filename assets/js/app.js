const words = ["Web", "Móvil", "UI/UX"];

let wordIndex = 0;
let letterIndex = 0;
let currentWord = "";
let isDeleting = false;

function type() {
	const typingText = document.querySelector(".typing-text");
	const word = words[wordIndex];
	if (isDeleting) {
		currentWord = word.substring(0, currentWord.length - 1);
	} else {
		currentWord = word.substring(0, currentWord.length + 1);
	}
	typingText.textContent = currentWord;
	if (!isDeleting && currentWord === word) {
		isDeleting = true;
		setTimeout(() => {
			isDeleting = false;
		}, 1000);
	} else if (isDeleting && currentWord === "") {
		isDeleting = false;
		letterIndex = 0;
		wordIndex++;
		if (wordIndex >= words.length) {
			wordIndex = 0;
		}
	}

	setTimeout(type, getRandomInt(50, 300));
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", () => {
	type();
});
