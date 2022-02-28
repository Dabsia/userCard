import React from 'react';
import Card from './Card'
import Button from './Button';
import styles from './ErrorModule.module.css'

const ErrorModule = (props) => {
  return (
      <div className={styles.backdrop} onClick = {props.onErr}>
        <Card className = {styles.modal}>
            <header className={styles.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={styles.content}>
                <p>{props.message}</p>
            </div>
            <footer className={styles.actions}>
                <Button onClick = {props.onErr}>Okay</Button>
            </footer> 
    </Card>
    </div>
  )
}


export default ErrorModule
