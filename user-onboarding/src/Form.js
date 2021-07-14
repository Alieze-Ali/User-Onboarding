// import React, import axios
import React from 'react';
import axios from "axios";

// set up export & form function

export default function Form(props){
// passing exact props - ??? need help understanding ???
const { values, update, submit } = props

// a function to store the value that was changed based off of the name of the form input
const onChange = evt => {
    const name = evt.target.name
    const value = evt.target.value
    const type = evt.target.type
    const checked = evt.target.checked
    console.log(type, name, value, checked);
}

// adding axios api
axios
.post("https://reqres.in/api/users", [])
.then((res) => {
    // something needs to go here ???
})
.catch((err) => {
    debugger;
});

return (
    <form> New User Onboarding Form
        <div>
            <label>User Name:
                <input type="text" name="name" value='' onChange={onChange}/>
            </label><br/>
            <label>Email:
                <input type="text" name="name" value='' onChange={onChange}/>
            </label><br/>
            <label>Password:
                <input type="text" name="name" value='' onChange={onChange}/>
            </label><br/>
            <label>I have read and understand the Terms of Service: 
                <input type="checkbox" name="name" value='' onChange={onChange}/>  
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mollis nunc sed id semper risus in hendrerit gravida rutrum.</p> 
                    
                    <p>Id aliquet risus feugiat in ante metus dictum at tempor. Accumsan lacus vel facilisis volutpat est velit.</p> 
                    
                    <p>Sodales ut eu sem integer. Purus sit amet volutpat consequat mauris nunc congue. Dignissim sodales ut eu sem integer vitae justo eget magna. Orci a scelerisque purus semper.</p> 
            </label>

           <div>
            <button>Submit</button>
           </div>
        </div>
        </form>
)




}