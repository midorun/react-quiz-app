import React, { useState } from "react";
import QuestionCard from "../QuestionCard";
import { Difficulty, fetchQuizQuestions, Question } from "../../services/API";
import { ButtonNext, ButtonStart, GlobalStyle, Wrapper } from "./App.styles";



const TOTAL_QUESTIONS = 10;

export type Answer = {
  userAnswer: string | undefined
  correctAnswer: string
  isCorrect: boolean
}

function App() {

  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState<Array<Question>>([])
  const [number, setNumber] = useState(0)
  const [userAnswers, setUserAnswers] = useState<Array<Answer>>([])
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(userAnswers);

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

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const userAnswer = e.currentTarget.value
      const correctAnswer = questions[number].correct_answer
      const isCorrect = userAnswer === correctAnswer;

      if (isCorrect) {
        setScore(prev => prev + 1)
      }

      setUserAnswers(prev => [...prev, { userAnswer, correctAnswer, isCorrect }])
    }
  }

  const nextQuestion = () => {
    if (number < TOTAL_QUESTIONS) {
      setNumber(prev => prev + 1)
    }
  }

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>Quiz</h1>
        {(gameOver || userAnswers.length === TOTAL_QUESTIONS) ? (
          <ButtonStart
            className="start"
            onClick={startTrivia}
          >
            Start
          </ButtonStart>
        ) : null}

        {(!gameOver && userAnswers.length === TOTAL_QUESTIONS) ? (
          <p className="score">Score: {score}</p>
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
          <ButtonNext
            className="next"
            onClick={nextQuestion}
          >
            Next
          </ButtonNext>
        ) : null}
      </Wrapper>
    </>
  );
}

export default App;
