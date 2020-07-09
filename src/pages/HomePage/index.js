import React from 'react';
import {useSelector} from 'react-redux';

import AdminPage from './rolePages/AdminPage';
import UserPage from './rolePages/UserPage';

const HomePage = () => {
  const role = useSelector(state => state.login.user.role);
  console.log(role);

  switch (role) {
    case 0:
    case "admin":
      return <AdminPage />;
    case "user":
      return <UserPage />;
    default:
      return null;
  }
};

export default HomePage;
