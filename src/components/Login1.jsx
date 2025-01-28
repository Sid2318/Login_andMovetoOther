import React, { useContext } from 'react'
import { useState } from 'react';
import './login.css';
import { FormContext, FormProvider } from './Context';
import { useFormStore } from './store';
import { useFormAction, useNavigate } from 'react-router-dom';

// Login1.jsx
export default function Login1() {
    // const {setFormData} = useContext(FormContext);
    const {setFormData} = useFormStore();
    const [name,setName] = useState('')
    const [gender, setGender] = useState('')
    const [email,setEmail] = useState('')
    const [phone,setPhone] =useState('')
    const navigate = useNavigate()

    let submit = (e) => {
        e.preventDefault();

        //Method 1
        // const data = {name,gender,email,phone};
        // navigate('/result' ,{state: data})

        //Method 2
        // setFormData({ name, gender, email, phone }); // Store data globally
        // navigate('/result');

        //method 3
        // const userData = { name, gender, email, phone };
        // localStorage.setItem('formData', JSON.stringify(userData));
        // navigate('/result');

        //method 4
        setFormData({ name, gender, email, phone });
        navigate('/result');

    }

    return (
        <div className='container'>
            <div>Login Page</div>
            <form onSubmit={submit}>
                <label htmlFor="">Name</label>
                <input type="text" onChange={(e) => setName(e.target.value)}/>
                <label htmlFor="">Gender</label>
                <select onChange={(e) => setGender(e.target.value)}>
                    <option value="" >-- Select an Option --</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <label>Email</label>
                <input type='email' onChange={(e) => setEmail(e.target.value)}></input>
                <label htmlFor="">Phone Number</label>
                <input type="phone" onChange={(e) => setPhone(e.target.value)}/>
                <button>Submit</button>
            </form>
        </div>
        
    );
}

