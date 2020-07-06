import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { LOGIN } from '../../../constants/routes';
import { del } from '../../../actions/userActions';

function AdminPage() {

  const dispatch = useDispatch();
  const history = useHistory();

  const signOut = () => {
    console.log('press');
    Cookies.remove('token');
    dispatch(del());
    history.push(LOGIN);
  };

  return (
    <div>
      <h1>
        Page from Admin
    </h1>
      <button

        style={{ height: '20px' }}
        onClick={() => signOut()}
        variant="contained"
        color="primary">
        Logout
      </button>

    </div>
  )
}

export default AdminPage;