import React, {useState} from 'react'
import Card from '../UI/Card';
import styles from './AddUsers.module.css';
import Button from '../UI/Button';
import ErrorModule from '../UI/ErrorModule';
import Wrapper from '../Helpers/Wrapper'

const AddUsers = (props) =>  {

    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState()


    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value)
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    }

    const addUserHandler = (event) => { 
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            })
            return;
            
        }
        if (+enteredAge < 1){
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).'
            })
            return;
        }
        
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredAge('')
        setEnteredUsername('')
    }
    const errorHandler = () => {
        setError(null)
    }

    return (
        <Wrapper>
            {error && (<ErrorModule onErr = {errorHandler} title = {error.title} message = {error.message}/>)}
            <Card className = {styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor = 'username'>Username</label>
                    <input 
                    id = 'username'
                    type = 'text'
                    autoComplete='off'
                    onChange={usernameChangeHandler}
                    value = {enteredUsername}/>
                    
                    <label htmlFor = 'age'>Age (Years)</label>
                    <input 
                    id = 'age'
                    type = 'number'
                    onChange={ageChangeHandler}
                    value = {enteredAge}
                    />
                    <Button type = 'submit'>Add User</Button>
                </form>
            </Card>
        </Wrapper>     
        
    
  )
}


export default AddUsers