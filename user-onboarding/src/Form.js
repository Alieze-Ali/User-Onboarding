// import React,  & usestate for form below
import React, { useState, useEffect } from 'react';
// import axios this is where it goes because we're calling it when user hits submit on the form
import axios from 'axios';
// import yup - here
import * as yup from 'yup';

// set up export & form function

export default function Form(props){
// passing props - to access state from another component
const { userList, setUserList } = props

// creating starting point for state (each input is a key value pair inside of state)
const initialState = {
    name: '',
    email: '',
    password: '',
    terms: false,

}

// creating a slice of state & initializing with initial state object above
const [formData, setFormData] = useState(initialState)

// a function to handle each event (evt) and storing the changes held in the destructured variables (name, value, etc)
const onChange = evt => {
    const { name, value, checked, type } = evt.target;
    // to handle both type of inputs
    const trueValue = type === 'checkbox' ? checked: value;
    //console.log(name, value);
    // updating current state by making copy of initialData, to keep original data safe
    setFormData(
        {
            // this is a dynamic representation [name]
            ...formData, [name]: trueValue
        }
    )
}

// adding axios api 
// need to put in a submit function which will run when you click submit button when you connect it
console.log(props)
const onSubmit = (e) => {
    // stops a total refresh of the page
    e.preventDefault()
    axios
    // 2 arguments, 1. where it's going 2. what you're sending it
    .post("https://reqres.in/api/users", formData)
    .then((res) => {
        // setUserList with res.data & whatever was in userList
        setUserList([res.data, ...userList])
        console.log(res.data)
    })
    .catch((err) => {
        debugger;
    });
}


return (
    <form onSubmit={onSubmit}> New User Onboarding Form
        <div>
            <label>User Name:
                <input type="text" name="name" onChange={onChange} value={formData.name} />
            </label><br/>
            <label>Email:
                <input type="text" name="email" onChange={onChange} value={formData.email} />
            </label><br/>
            <label>Password:
                <input type="text" name="password" onChange={onChange} value={formData.password} />
            </label><br/>
            <label>I have read and understand the Terms of Service: 
                <input type="checkbox" name="terms" onChange={onChange} value={formData.terms} />  
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mollis nunc sed id semper risus in hendrerit gravida rutrum.</p> 
                    
                    <p>Id aliquet risus feugiat in ante metus dictum at tempor. Accumsan lacus vel facilisis volutpat est velit.</p> 
                    
                    <p>Sodales ut eu sem integer. Purus sit amet volutpat consequat mauris nunc congue. Dignissim sodales ut eu sem integer vitae justo eget magna. Orci a scelerisque purus semper.</p> 
            </label>

           <div>
            <button type="submit">Submit</button>
           </div>
        </div>
        </form>
)




}