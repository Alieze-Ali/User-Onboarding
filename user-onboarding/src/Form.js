// import React,  & usestate for form below
import React, { useState, useEffect } from 'react';
// import axios this is where it goes because we're calling it when user hits submit on the form
import axios from 'axios';
// import yup - here
import * as yup from 'yup';

// set validation schema
// ??? I'm sure there's a better way to require @ and special chars - not sure how, will look up later ???
const schema = yup.object().shape({
    name: yup.string().required('user name is required').min(6, 'user name needs to be 6 chars min'),
    email: yup.string().email('email must include @ symbol'),
    password: yup.string().required('password is required').min(6, 'password needs to be 8 chars min and include at least 1 special char'),
    terms: yup.boolean().oneOf([true], 'you must agree to terms to continue'),
})

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
const initialErrorState = {
    name: '',
    email: '',
    password: '',
    terms: '',

}
// creating a slice of state & initializing with initial state object above
const [formData, setFormData] = useState(initialState)
// creating another slice of state to set the state of the button 
const [disabled, setDisabled] = useState(true)
// creating state for errors
const [errors, setErrors] = useState(initialErrorState)
// setting state for setFormErrors helper
const setFormErrors = (name, value) => {
    yup.reach(schema, name).validate(value)
    .then(() => {
        setErrors({
        ...errors, [name]: ''})
        setDisabled(false)
    })
    .catch(err => {
        setErrors({
            ...errors, 
            [name]: err.errors[0]
        })
        setDisabled(true)
    })
}

// adding useEffect to fire if yup schema passes in order to enable submit button functionality
// ??? IDK how to describe this - & a little help understanding exactly what it's doing
useEffect(() => {
    schema.isValid(formData)
    .then(valid => setDisabled(!valid))
}, [formData])

// a function to handle each event (evt) and storing the changes held in the destructured variables (name, value, etc)
const onChange = evt => {
    const { name, value, checked, type } = evt.target;
    // to handle both type of inputs
    const trueValue = type === 'checkbox' ? checked: value;
    // helper that will check whether the value to use is legit & will update validation errors if needed
    setFormErrors(name, trueValue)
   
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
    // note validation div needs a parent element
    <form onSubmit={onSubmit}> New User Onboarding Form
        <div style={{ color: 'red'}}>
            <div>{errors.name}</div>
            <div>{errors.email}</div>
            <div>{errors.password}</div>
            <div>{errors.terms}</div>
        </div>
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
                    
            </label>

           <div>
            <button disabled={disabled} type="submit">Submit</button>
           </div>
        </div>
        </form>
)




}