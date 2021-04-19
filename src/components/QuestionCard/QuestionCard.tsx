import React from "react";
import { ButtonAnswer, ButtonWrapper, GlobalStyle } from "./QuestionCard.styles";

type Props = {
  question: string;
  answers: Array<string>;
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: string | undefined;
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
          <ButtonWrapper key={answer}>
            <ButtonAnswer
              disabled={!!userAnswer}
              value={answer}
              onClick={callback}
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
