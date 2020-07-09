import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { LOGIN } from '../../../constants/routes';
import { del, show } from '../../../actions/userActions';
import Table from '../../../table/Table';

function AdminPage() {

  const list1 = useSelector(state => state.login.list);

  const dispatch = useDispatch();
  const history = useHistory();

  const signOut = () => {
    console.log('press');
    dispatch(del());
    Cookies.remove('token');
    history.push(LOGIN);
  };

  const list = () => {
    dispatch(show());
  };


  if (list1 != null) {
    return (
      <div>
        <h1>
          <button
            onClick={() => list()}>
            Show all participants
          </button>
        </h1>
        <button

          style={{ height: '20px' }}
          onClick={() => signOut()}
          variant="contained"
          color="primary">
          Logout
      </button>

        <div>
          <Table list={list1}></Table>
      </div>

      </div>
    )
  }
  else {
    return (
      <div>
        <h1>
          <button
            onClick={() => list()}>
            Show all participants
          </button>
        </h1>
        <button

          style={{ height: '20px' }}
          onClick={() => signOut()}
          variant="contained"
          color="primary">
          Logout
      </button>

        <div>
      </div>

      </div>
    )

  }
}

export default AdminPage;