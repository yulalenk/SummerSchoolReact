import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { GET_USER_REQUEST } from '../constants/api';
import { add, del } from '../actions/userActions';

const PrivateRoute = ({ component: Component, ...rest }) => {
  let user = useSelector(state => state.login.user);
  return (
    <Route
      {...rest}
      render={props => (user !== null ? <Component {...props} /> : <Redirect to="/" />)}
    />
  );
};

PrivateRoute.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  component: PropTypes.any.isRequired
};

export default PrivateRoute;
