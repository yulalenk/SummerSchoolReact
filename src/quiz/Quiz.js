import React, { useState, useEffect } from 'react';
import Question from './Question';
import QuestionCount from './QuestionCounter';
import Questions from './quizQuestions';
import { useHistory } from 'react-router-dom';
import {HOME} from '../constants/routes';


function Quiz() {

    const [questionId, setQuestionId] = useState(0);
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [result, setResult] = useState(0);
    const [button, setButton] = useState("next");
    const history = useHistory();

    let quizQuestions = Questions;

    useEffect(() => {
        setQuestion(quizQuestions[questionId].question)
        console.log("Результат" + result)
    }, [questionId, result]
    );



    const nextQuestion = () => {
        console.log(questionId)
        if (questionId < quizQuestions.length - 1) {
            console.log("Я здесь!")
            if (answer == quizQuestions[questionId].answer.trim()) {
                setResult(result + 1);
            }
            setQuestionId(questionId + 1);
            setQuestion(quizQuestions[questionId].question);
            if (questionId == 4)
                setButton("Check")
        } else {

            console.log("Прошу прощения");
            console.log("ТО, что сейчас: " + answer);
            if (answer == quizQuestions[questionId].answer.trim()) {
                setResult(result + 1);
            }

        }
    }

    return (
        <div >
            <QuestionCount
                counter={questionId + 1}
                total={quizQuestions.length}
            />
            <Question content={question} />
            <input value={answer} onChange={e => setAnswer(e.target.value)} />
            <br />
            <button onClick={nextQuestion}>{button}</button>
        </div>
    );
}

export default Quiz;