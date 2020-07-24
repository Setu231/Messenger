import React, { useState, useEffect } from 'react';
import {FormControl,Input} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import {IconButton} from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';

function App() {
  const [input, setInput] = useState('');
  const [message, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  // useState = variable in REACT
  // useEffect = run code on a condition in REACT
  useEffect(() => {
    // run once when the app component loads
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id : doc.id, message: doc.data()})))
    });
  }, [] ) //condition

  useEffect(() => {
    // run the code here...
    setUsername(prompt('Please enter your name'));
  }, [] ) //condition

    // if its blank inside [], this code runs ONCE when the app components loads
    // if we have variable like input, it runs every time input changes

  const sendMessage = (event) => {
    // all the logic to send a mesaage goes
    event.preventDefault();
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()

    })
    setInput('');
  }

  return (
    <div className="App">
      <br>
      </br>
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" alt = "messenger.png"/>
      <h1> Hello Leetcoders</h1>
      <h2> Welcome {username}</h2>
      <form className = "app__form"> 
      <FormControl className = "app__formControl">
        <Input className = "app_input" placeholder = 'Enter a message...' value ={input} onChange={event => setInput(event.target.value)}/>
        <IconButton className = "app_iconButton" disabled={!input} variant = "contained" color="sucess" type='submit' onClick = {sendMessage}>
          <SendIcon />
        </IconButton>


      {/* button */}
      {/* <Button disabled={!input} variant = "contained" color="sucess" type='submit' onClick = {sendMessage}> Send Message </Button> */}
      </FormControl>
      </form>

      {/* messages themselves */}
      <FlipMove>
      {
        message.map(({id, message}) =>(
          <Message key ={id} username ={username} message={message} />
        ))
      }
      </FlipMove>
      
    </div>
  );
}

export default App;
