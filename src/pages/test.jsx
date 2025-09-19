import React, { useState } from "react";
import Navbar from "../components/navbar";
import MainPanel from "../components/mainpanel";
import Sidepanel from "../components/sidepanel";

const initialQuestions = [
	{
		qno: 1,
		question: "What is the capital of France?",
		options: [
			{ key: "A", value: "Berlin" },
			{ key: "B", value: "Madrid" },
			{ key: "C", value: "Paris" },
			{ key: "D", value: "Rome" },
		],
		chosenOption: null,
		statusOfQuestion: "unopened",
	},
	{
		qno: 2,
		question: "Which planet is known as the Red Planet?",
		options: [
			{ key: "A", value: "Earth" },
			{ key: "B", value: "Mars" },
			{ key: "C", value: "Jupiter" },
			{ key: "D", value: "Venus" },
		],
		chosenOption: null,
		statusOfQuestion: "unopened",
	},
	{
		qno: 3,
		question: "Who wrote 'Romeo and Juliet'?",
		options: [
			{ key: "A", value: "William Shakespeare" },
			{ key: "B", value: "Charles Dickens" },
			{ key: "C", value: "Jane Austen" },
			{ key: "D", value: "Mark Twain" },
		],
		chosenOption: null,
		statusOfQuestion: "unopened",
	},
	{
		qno: 4,
		question: "What is the largest ocean on Earth?",
		options: [
			{ key: "A", value: "Atlantic Ocean" },
			{ key: "B", value: "Indian Ocean" },
			{ key: "C", value: "Arctic Ocean" },
			{ key: "D", value: "Pacific Ocean" },
		],
		chosenOption: null,
		statusOfQuestion: "unopened",
	},
	{
		qno: 5,
		question: "What is the chemical symbol for gold?",
		options: [
			{ key: "A", value: "Au" },
			{ key: "B", value: "Ag" },
			{ key: "C", value: "Gd" },
			{ key: "D", value: "Go" },
		],
		chosenOption: null,
		statusOfQuestion: "unopened",
	},
	{
		qno: 6,
		question: "Which country hosted the 2016 Summer Olympics?",
		options: [
			{ key: "A", value: "China" },
			{ key: "B", value: "Brazil" },
			{ key: "C", value: "UK" },
			{ key: "D", value: "Russia" },
		],
		chosenOption: null,
		statusOfQuestion: "unopened",
	},
	{
		qno: 7,
		question: "What is the hardest natural substance?",
		options: [
			{ key: "A", value: "Gold" },
			{ key: "B", value: "Iron" },
			{ key: "C", value: "Diamond" },
			{ key: "D", value: "Silver" },
		],
		chosenOption: null,
		statusOfQuestion: "unopened",
	},
	{
		qno: 8,
		question: "Who painted the Mona Lisa?",
		options: [
			{ key: "A", value: "Vincent van Gogh" },
			{ key: "B", value: "Leonardo da Vinci" },
			{ key: "C", value: "Pablo Picasso" },
			{ key: "D", value: "Claude Monet" },
		],
		chosenOption: null,
		statusOfQuestion: "unopened",
	},
	{
		qno: 9,
		question: "What is the smallest prime number?",
		options: [
			{ key: "A", value: "1" },
			{ key: "B", value: "2" },
			{ key: "C", value: "3" },
			{ key: "D", value: "5" },
		],
		chosenOption: null,
		statusOfQuestion: "unopened",
	},
	{
		qno: 10,
		question: "Which gas do plants absorb from the atmosphere?",
		options: [
			{ key: "A", value: "Oxygen" },
			{ key: "B", value: "Nitrogen" },
			{ key: "C", value: "Carbon Dioxide" },
			{ key: "D", value: "Hydrogen" },
		],
		chosenOption: null,
		statusOfQuestion: "unopened",
	},
];

function Test() {
	const [questions, setQuestions] = useState(initialQuestions);

	return (
		<>
			<Navbar />
			<MainPanel questions={questions} setQuestions={setQuestions} />
			<Sidepanel questions={questions} setQuestions={setQuestions} />
		</>
	);
}

export default Test;