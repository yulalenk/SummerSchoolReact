import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import Cookies from 'js-cookie';
import { LOGIN } from '../../../constants/routes';
import { del, show } from '../../../actions/userActions';
import { Wrapper } from './AdminPageStyles';
import Table from '../../../table/Table';
import App from '../../../chat/App';

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


  //if (list1 != null) {
  return (
    <Wrapper>
      <table>
        <td>
          <Button
            onClick={() => list()}
            style={{ backgroundColor: "#08294a", color:"white", border:"3px solid white",height: "30px" }}
            variant="contained">
            Show all participants
          </Button>
          <Button
            className="button"
            onClick={() => signOut()}
            variant="contained"
            style={{ backgroundColor: "#08294a", color:"white",height: "30px",border:"3px solid white" }}
            color="default">
            Logout
      </Button>
          <br />
          <Table list={list1 ? list1 : []}></Table>
        </td>
        <td>
          <App></App>
        </td>
      </table>
    </Wrapper>
  )
}

export default AdminPage;