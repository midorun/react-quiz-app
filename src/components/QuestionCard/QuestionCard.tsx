import React from "react";
import { Answer } from "../App/App";
import { ButtonAnswer, ButtonWrapper, GlobalStyle } from "./QuestionCard.styles";

type Props = {
  question: string;
  answers: Array<string>;
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: Answer | undefined;
  questionNumber: number;
  questionsTotal: number;

}

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNumber,
  questionsTotal }) =>
(
  <>
    <GlobalStyle />
    <div>
      <p className="number">
        Queston: {questionNumber} / {questionsTotal}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div >
        {answers.map(answer => (
          <ButtonWrapper
            key={answer}
          >
            <ButtonAnswer
              disabled={!!userAnswer}
              value={answer}
              onClick={callback}
              correct={answer === userAnswer?.correctAnswer}
              userClicked={answer === userAnswer?.userAnswer}
            >
              <span
                dangerouslySetInnerHTML={{ __html: answer }}
              />
            </ButtonAnswer>
          </ButtonWrapper>
        ))}
      </div>
    </div>
  </>
)


export default QuestionCard;
