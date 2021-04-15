import React from "react";

type Props = {
    question: string;
    answers: Array<string>;
    callback: any;
    userAnswer: any;
    questionNumber: number;
    questionsTotal: number;

}

const QuestionCard: React.FC<Props> = ({
    question,
    answers,
    callback,
    userAnswer,
    questionNumber,
    questionsTotal }) => (
    <div>
        <p className="number">
            Queston: {questionNumber} / {questionsTotal}
        </p>
        <p dangerouslySetInnerHTML={{ __html: question }} />
        <div>
            {answers.map(answer => (
                <div>
                    <button
                        disabled={userAnswer}
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
