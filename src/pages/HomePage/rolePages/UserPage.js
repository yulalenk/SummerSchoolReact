import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useActions from '../../../hooks/useAction';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { LOGIN } from '../../../constants/routes';
import { del } from '../../../actions/userActions';
import { send } from '../../../actions/quizActions';
import { Wrapper, Form, Button, QuizWrapper, InputFormWrapper } from './UserPageStyles';
import Question from '../../../quiz/Question';
import QuestionCount from '../../../quiz/QuestionCounter';


function UserPage() {

  const startResult = useSelector(state => state.login.user.result);
  const quizQuestions = useSelector(state => state.login.questions);
  const init = startResult ? startResult : 0;
  const dispatch = useDispatch();
  const history = useHistory();
  const [questionId, setQuestionId] = useState(0);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState(init);
  const [timer, setTimer] = useState(0);
  const [submitAction] = useActions([del]);
  const [quizData,setQuizData] =useState([]);



  //let quizQuestions = Questions;
  let time;


  function countdown() {  // функция обратного отсчета
    setTimer(timer - 1);
    if (timer < 0) {
      clearTimeout(time); // таймер остановится на нуле
    }
    else {
      console.log("Я зашел сюда")
      time = setTimeout(countdown, 1000);
    }
  }



  const signOut = () => {
    submitAction();
    Cookies.remove('token');
    history.push(LOGIN);
  };

  let nextQuestion = () => {
    if (questionId < quizQuestions.length) {
      let answer = document.getElementById("answer").value;
      setQuizData(quizData.concat(answer));
      //quizData.push(answer);
      console.log(quizData);
      // if (answer == quizQuestions[questionId].answer.trim()) {
      //   setResult(result + 1);
      // }
      setResult(result + 1);
      setQuestionId(questionId + 1);
    } else {
      // if (answer == quizQuestions[questionId].answer.trim()) {
      //   setResult(result + 1);
      // }
      quizData.push(answer);
      setResult(result + 1);

    }
    setAnswer("");

  };

  useEffect(() => {
    if (questionId < quizQuestions.length) {
      if (startResult == null) {
        setQuestion(quizQuestions[questionId].question);
        setTimeout(nextQuestion, 10000 / 2);
      }
    }
    else
      dispatch(send(result, quizData));
  }, [questionId]
  );


  if (startResult == null) {
    return (
      <Wrapper>
        {/* <Button
          style={{ height: '20px' }}
          onClick={() => signOut()}
          variant="contained"
        >
          Logout
      </Button> */}

        <Form>
          {timer}
          <QuizWrapper >
            <QuestionCount
              counter={questionId + 1}
              total={quizQuestions.length}
            />
            <Question content={question} />
            <InputFormWrapper>
              <input id="answer" value={answer} onChange={e => setAnswer(e.target.value)} />
            </InputFormWrapper>
            <br />
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