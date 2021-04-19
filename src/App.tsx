import React, { useState, useEffect } from "react";
import QuestionCard from "./components/QuestionCard";
import { Difficulty, fetchQuizQuestions, Question } from "./services/API";

const TOTAL_QUESTIONS = 10;

function App() {

  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState<Array<Question>>([])
  const [number, setNumber] = useState(0)
  const [userAnswers, setUserAnswers] = useState([])
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(questions);

  const startTrivia = async () => {
    // Задать начальное состояние quiz
    setLoading(false);
    setQuestions(await fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.easy)
      .then(result => result)
    )
    setNumber(0)
    setUserAnswers([])
    setScore(0)
    setGameOver(false)
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
      {!gameOver && questions.length === TOTAL_QUESTIONS && (
        <QuestionCard
          questionNumber={number + 1}
          questionsTotal={TOTAL_QUESTIONS}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
        />
      )}
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
