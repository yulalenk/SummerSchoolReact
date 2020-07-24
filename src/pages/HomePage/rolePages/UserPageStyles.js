import styled, { keyframes } from "styled-components";


const Wrapper = styled.div`
  position:relative;
  box-sizing: border-box;
 // padding-top:10%;
  width:  100%;
  height: 100vh;
  background-color: #E3ECF4;

  @media (max-height: 500px) {
    height: 150vh;
  } 
`;

const QuizWrapper = styled.div`
margin:auto;
`

const InputFormWrapper = styled.div`
  position: relative;
  padding: 15px 0 0;
  margin-top: 5px;
  width: 100%;

  & input {
    font-family: sans-serif;
    width: 70%;
    border: 0;
    border-bottom: 2px solid #08294a;
    outline: 0;
    font-size: 1.1rem;
    color: #9b9b9b;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;

    &::placeholder {
      color: red;
    }

    &:focus {
      &::placeholder {
        color: transparent;
      }
      padding-bottom: 6px;
      border-width: 3px;
      border-image: linear-gradient(to right, #f2602c, #ffefd5);
      border-image-slice: 1;
    }

    &:required,
    &:invalid {
      box-shadow: none;
    }
  }

  & label {
    font-size: 1rem;
    color: #9b9b9b;
    font-family: sans-serif;
    position: absolute;
    bottom: 40px;
  }
`;

const Form = styled.div`
  position: absolute;
  left:250px;
  top:190px;
  z-index: 1;
  box-shadow: 0 10px 7px -10px rgba(0, 0, 0, 0.4);
  text-align:center;
  background: #f2f6fb;
  width:450px;
  height: 200px;
  border: 2px solid #08294a;
  border-radius: 10px;
  align:center;

`;

const Text = styled.h2`
color:#08294a;
margin-top:70px;
`

const FormAfter = styled.div`
  position: absolute;
  left:420px;
  top:190px;
  z-index: 1;
  box-shadow: 0 10px 7px -10px rgba(0, 0, 0, 0.4);
  text-align:center;
  background: #f2f6fb;
  width:450px;
  height: 200px;
  border: 2px solid #08294a;
  border-radius: 10px;
  align:center;
  vertical-align:middle;

`;

const Button = styled.button`
  background-color: #f2602c;
  border: 1px solid #FFFFFF;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;
  transition: border 0.2s linear 0s, box-shadow 0.2s linear 0s;
  border-radius: 6px;
  color: white;
  width:230px;
  font-family: sans-serif;
  font-size: 18px;
  text-align:center;
  position:absolute;
  top:10px;
  left: 80%;
  text-decoration:none;

  &:hover,&:focus {
    border-color: white;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(82, 168, 236, 0.3);
    outline: 0 none;
  }
`;

export {Wrapper,Form,Button, InputFormWrapper, QuizWrapper, FormAfter, Text};