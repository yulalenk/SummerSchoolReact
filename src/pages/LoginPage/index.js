import React from 'react';
import { Redirect } from "react-router-dom";
import LoginForm from '../../forms/LoginForm';
import RegistrationForm from '../../forms/RegistrationForm';
import { LoginWrapper, LoginFormWrapper, BackImage, Logo, CloudWrapper, Text } from './LoginPageStyles';
import { LOGIN } from "../../constants/routes";

function AuthenticationPage(props) {

  let params = new URLSearchParams(props.location.search).get("tab");


  if (params == null) {
    return (
      <LoginWrapper>
        <CloudWrapper>
          <BackImage src={`${process.env.PUBLIC_URL}/image/cloud-2.png`} timeAnimation="100s" />
          <BackImage src={`${process.env.PUBLIC_URL}/image/cloud.png`} timeAnimation="70s" />
        </CloudWrapper>
        <LoginFormWrapper>
          <Logo src={`${process.env.PUBLIC_URL}/image/logo1.png`} />
          <Text>Welcome to SummerSchool</Text>
          <LoginForm />
        </LoginFormWrapper>
      </LoginWrapper>
    )
  }

  else if (params == 'reg') {
    return (
      <LoginWrapper>
        <CloudWrapper>
          <BackImage src={`${process.env.PUBLIC_URL}/image/cloud-2.png`} timeAnimation="100s" />
          <BackImage src={`${process.env.PUBLIC_URL}/image/cloud.png`} timeAnimation="70s" />
        </CloudWrapper>
        <LoginFormWrapper>
          <Logo src={`${process.env.PUBLIC_URL}/image/logo1.png`} />
          <Text>Welcome to SummerSchool</Text>
          <RegistrationForm />
        </LoginFormWrapper>
      </LoginWrapper>
    )
  }

  else
    return <Redirect to={LOGIN} />
}

export default AuthenticationPage;