import React, { useState } from "react";
import QuestionCard from "./components/QuestionCard";
import { Difficulty, fetchQuizQuestions, Question } from "./services/API";

const TOTAL_QUESTIONS = 10;

function App() {

  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState<Array<Question>>([])
  const [number, setNumber] = useState(0)
  const [userAnswers, setUserAnswers] = useState<Array<string>>([])
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  console.log(userAnswers);
  console.log(number);

  const startTrivia = async () => {
    setLoading(true);
    setQuestions(await fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.easy)
      .then(result => result)
    )
    setNumber(0)
    setUserAnswers([])
    setScore(0)
    setGameOver(false)
    setLoading(false)
  }

  const checkAnswer = (answer: string) => {
    if (!gameOver) {
      setUserAnswers(prev => [...prev, answer])
    }


  }
  const nextQuestion = () => {
    if (number < TOTAL_QUESTIONS) {
      setNumber(number + 1)
    }
  }

  return (
    <div className="App">
      <h1>React Quiz</h1>
      {(gameOver || userAnswers.length === TOTAL_QUESTIONS) ? (
        <button
          className="start"
          onClick={startTrivia}
        >
          Start
        </button>
      ) : null}

      {gameOver ? (
        <p className="score">Score:{score}</p>
      ) : null}

      {loading ? (
        <p>Loading questions</p>
      ) : null}

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

      {!gameOver && userAnswers.length === number + 1 && userAnswers.length !== TOTAL_QUESTIONS ? (
        <button
          className="next"
          onClick={nextQuestion}
        >
          Next Question
        </button>
      ) : null}

    </div>
  );
}

export default App;
