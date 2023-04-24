// Get the form and results elements from the HTML
const quizForm = document.getElementById('quiz-form');
const resultsDiv = document.getElementById('results');

// Add an event listener to the form that listens for a submit event
quizForm.addEventListener('submit', (e) => {
	// Prevent the default form submission behavior
	e.preventDefault();

	// Get the user's answers from the form elements
	const q1Answer = quizForm.elements.q1.value;
	const q2Answer = quizForm.elements.q2.value;

	// Initialize a score variable to keep track of the number of correct answers
	let score = 0;

	// Check each answer and add to the score if it is correct
	if (q1Answer === 'b') {
		score++;
	}

	if (q2Answer === 'c') {
		score++;
	}

	// Display the results to the user
	resultsDiv.innerHTML = `
		<p>You got ${score} out of 2 questions correct.</p>
	`;
});
