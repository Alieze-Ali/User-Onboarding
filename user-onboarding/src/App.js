// import logo from './logo.svg';
// import './App.css';

// importing react & useState - I'm guessing I'll need state
import React, { useState } from 'react';

// importing Form.js into App.js
import Form from "./Form";

// importing key id generator
import { v4 as uuid } from 'uuid';

// setting up a way to keep track of new users
const initialFormValues = {
  username: '',
  email: '',
  password: '',
}

function App() {
  // setting up state & passing object from initialFormValues to set up a new user -??? I think
  const [newUser, setNewUser] = useState([{
    username: 'Alieze',
    email: 'alieze@gmail.com',
    password: '1234567',
    //gotta come back to this for install and figure that out!!!???
    id: uuid(), 
  }])

  // adding form state ??? help - why exactly am i doing this or how does this work
  // const [formValues, setFormValues] = useState(initialFormValues)

  // adding another form state slice ??? need help understanding
  

  // adding submit function to update list of new users and add functionality  to add new user




  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
