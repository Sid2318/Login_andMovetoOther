import React from 'react'
import { useContext } from 'react'
import './result.css';
import { useLocation } from 'react-router-dom'
import { FormContext } from './Context'
import { useFormStore } from './store';

export const Result = () => {

  //Method 1
  // const location = useLocation()
  // const {name,gender,email,phone} = location.state || {}

  //Method 2 
  // const { formData } = useContext(FormContext);
  // const { name, gender, email, phone } = formData;

  //method 3
  // const formData = JSON.parse(localStorage.getItem('formData'));
  // const { name, gender, email, phone } = formData || {};

  //method 4
  const { formData } = useFormStore();
  const { name, gender, email, phone } = formData;

  return (
    <>
      <h1>Result Page</h1>
            <p>Name: {name}</p>
            <p>Gender: {gender}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
    </>
  )
}
