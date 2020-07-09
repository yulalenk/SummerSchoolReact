import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import response from "../users.json";
import { GET_USER_REQUEST } from '../constants/api';
import { add, del } from '../actions/userActions';

const PrivateRoute = ({ component: Component, ...rest }) => {
  // const [user, setUser] = useState();
  // const [isLoading, setIsLoading] = useState(true);
  // const [isError, setIsError] = useState(false);
  // const dispatch = useDispatch();
  let user = useSelector(state => state.login.user);

  // useEffect(() => {
  //   const fetchUser = async () => {

  //     try {
  //       const response = await axios.get(GET_USER_REQUEST, {
  //         headers: { Authorization: Cookies.get('token') }
  //       });
  //       console.log(response);
  //       if (response.status !== 200) {
  //         throw Error(response.data.message);
  //       }
  //      // setUser(response.data.user);
  //       dispatch(add(response.data.user));
        
  //     } catch (error) {
  //       // setIsError(true);
  //       // setUser();
  //       dispatch(del());
  //       Cookies.remove('token');
  //     }
  //     // setIsLoading(false);
  //   };
  //   fetchUser();
    
  // }, []);

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       console.log(response);
  //       var sign = false;
  //       response.forEach(element => {
  //         let token = (element.user.token).trim();
  //         if (token === Cookies.get('token')) {
  //           console.log("I'm here")
  //           sign = true;
  //           setUser(element.user);
  //           console.log(element.user);
  //           dispatch(add(element.user));
  //         }
  //       });

  //       if (!sign) {
  //         throw Error(response.message);
  //       }

  //     } catch (error) {
  //       setIsError(true);
  //       setUser();
  //       dispatch(del());
  //       Cookies.remove('token');
  //     }
  //     setIsLoading(false);
  //   };
  //   fetchUser();
  // }, []);

  //if (isError) return <Redirect to="/" />;

  //if (isLoading) return (<div>Loading...</div>);
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
