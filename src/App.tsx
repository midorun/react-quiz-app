import React, { useState, useEffect } from "react";
import QuestionCard from "./components/QuestionCard";
import { Difficulty, fetchQuizQuestions } from "./services/API";

const TOTAL_QUESTIONS = 10;

const res = fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.easy);
console.log(res);


function App() {

    const [loading, setLoading] = useState(false)
    const [questions, setQuestions] = useState([])
    const [number, setNumber] = useState(0)
    const [userAnswers, setUserAnswers] = useState([])
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(true);

    const startTrivia = async () => {

    }

    const checkAnswer = (e: any) => {

    }

    const nextQuestion = () => {

    }



    return (

        <div className="App">
            <h1>React Quiz</h1>
            <button
                className="start"
                onClick={startTrivia}
            >
                Start
            </button>
            <p className="score">Score:</p>
            <p>Loading questions</p>
            {/* <QuestionCard
                questionNumber={number + 1}
                questionsTotal={TOTAL_QUESTIONS}
                question={questions[number].question}
                answers={questions[number].answers}
                userAnswer={userAnswers ? userAnswers[number] : undefined}
                callback={checkAnswer}
            /> */}
            <button
                className="next"
                onClick={nextQuestion}
            >
                nextQuestion
            </button>

        </div>
    );
}

export default App;
