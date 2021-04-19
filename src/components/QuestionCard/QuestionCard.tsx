import React from "react";
import style from './QuestionCard.module.css';

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
  <div>
    <p className="number">
      Queston: {questionNumber} / {questionsTotal}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }} />
    <div >
      {answers.map(answer => (
        <div key={answer}>
          <button
            className={style.answer_btn}
            disabled={!!userAnswer}
            value={answer}
            onClick={callback}
          >
            <span
              dangerouslySetInnerHTML={{ __html: answer }}
            />
          </button>
        </div>
      ))}
    </div>
  </div>
)


export default QuestionCard;
