import logo from './logo.svg';
import './App.css';

// importing react & useState & useEffect - I'm guessing I'll need state
import React, { useState, useEffect } from 'react';

// importing components Form.js into App.js
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
  
  // adding state to hold list of users
  const [userList, setUserList] = useState([])

  
    console.log(userList)

  return (
    <div className="App">
      {/* passing down state, everything after Form is a prop */}
      <Form userList={userList} setUserList={setUserList}/>
      {/* or you can make a component and loop over like in last sprint */}
      <pre>{JSON.stringify(userList)}</pre>
    </div>
  );
}

export default App;
