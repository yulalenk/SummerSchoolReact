import React, { useState, useEffect } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { LOGIN, HOME } from '../../../constants/routes';
import { del  } from '../../../actions/userActions';
import { send  } from '../../../actions/quizActions';
import { Wrapper, Form, Button, QuizWrapper } from './UserPageStyles';
import Question from '../../../quiz/Question';
import QuestionCount from '../../../quiz/QuestionCounter';
import Questions from '../../../quiz/quizQuestions.json';
import {InputFormWrapper} from './UserPageStyles';


function UserPage() {

  const startResult = useSelector(state => state.user.user.result);
  const init = startResult?startResult:0;
  const dispatch = useDispatch();
  const history = useHistory();
  const [questionId, setQuestionId] = useState(0);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState(init);
  const [button, setButton] = useState("next");

  let quizQuestions = Questions;


  const signOut = () => {
    Cookies.remove('token');
    dispatch(del());
    history.push(LOGIN);
  };

  const nextQuestion = () => {
    console.log(questionId)
    if (questionId < quizQuestions.length - 1) {
      if (answer == quizQuestions[questionId].answer.trim()) {
        setResult(result + 1);
      }
      setQuestionId(questionId + 1);
      setQuestion(quizQuestions[questionId].question);
      if (questionId == 4)
        setButton("Check")
        setAnswer("");
    } else {
      if (answer == quizQuestions[questionId].answer.trim()) {
        setResult(result + 1);
      }
      dispatch(send(result));

    }
  }

  useEffect(() => {
    setQuestion(quizQuestions[questionId].question)
  }, [questionId, result]
  );



if (init == 0){
    return (
      <Wrapper>
        <Button
          style={{ height: '20px' }}
          onClick={() => signOut()}
          variant="contained"
        >
          Logout
      </Button>

        <Form>
          <QuizWrapper >
            <QuestionCount
              counter={questionId + 1}
              total={quizQuestions.length}
            />
            <Question content={question} />
            <InputFormWrapper>
            <input value={answer} onChange={e => setAnswer(e.target.value)} />
            </InputFormWrapper>
            <br />
            <button onClick={nextQuestion}>{button}</button>
          </QuizWrapper>
        </Form>


      </Wrapper>
    )
  }

  else {

    return (
      <Wrapper>
        <Button
          style={{ height: '20px' }}
          onClick={() => signOut()}
          variant="contained"
        >
          Logout
      </Button>

        <Form>
          <h1>Your result:</h1>
          <h1>{result}</h1>
        </Form>


      </Wrapper>
    )
  }
}

export default UserPage;