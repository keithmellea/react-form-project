import React from 'react';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { format } from 'date-fns';

const uRF = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [staff, setStaff] = useState('');
  const [bio, setBio] = useState('');
  const [signUp, setSignUp] = useState('');

  console.log(validationErrors);

  



}

function App() {
  return (
    <h1>Hello world!</h1>
  );
}

export default App;
