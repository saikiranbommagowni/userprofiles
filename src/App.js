import './App.css';
import bs from 'assets/globalStyles/bootstrap.module.css';
import cx from 'classnames';

import { connect } from 'react-redux';
import * as actionTypes from 'store/actions';
import { useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Users from 'containers/Users/Users';
import UserModify from 'containers/Users/UserModify';
import NewUser from 'containers/Users/NewUser';

function App(props) {
  useEffect(()=>{
    if(props.usersData && props.usersData.length===0){
    const url="https://jsonplaceholder.typicode.com/users";
    fetch(url).then(res=>res.json()).then(data=>props.onStoreUsers(data));
    }
});

  return (
    <Router>
      <main>
      <nav className={cx(bs['navbar'], bs['sticky-top'], bs['navbar-light'], bs['bg-light'], bs['justify-content-between'])}>
         <a className={cx(bs['navbar-brand'])} href="/">User Profiles</a>
         <a className={cx(bs['nav-link'],bs['p-2'])} href="/newuser" ><FontAwesomeIcon icon={faUserPlus}/> Add User</a>
         
      </nav>
        <Switch>
          <Route path="/" exact>
            <Users usersData={props.usersData}/>
          </Route>
          <Route path="/:userId/modify">
            <UserModify usersData={props.usersData}/>
          </Route>
          <Route path="/newuser">
            <NewUser usersData={props.usersData}/>
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}
const mapStateToProps = state => {
  return {
      usersData: state.usersReducer.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
      onStoreUsers:(data)=>dispatch({type:actionTypes.STORE_USERS, usersData:data})
  }

}
export default connect(mapStateToProps, mapDispatchToProps)(App);
