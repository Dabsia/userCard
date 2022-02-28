import React, {useState, Fragment} from 'react';
import './App.css';
import AddUsers from './components/Users/AddUsers';
import UsersList from './components/Users/UsersList';

const App = () => {

  const [usersList, setUsersList] = useState([])

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => { 
      return [...prevUsersList, {name: uName, age: uAge, id: Math.random().toString()}];
      
    });
  }

  return(
    <Fragment>
      <AddUsers onAddUser = {addUserHandler}/>
      <UsersList users = {usersList}/>
    </Fragment>
  )
}


export default App;
