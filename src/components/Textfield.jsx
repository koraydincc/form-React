import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Button from "./Button"

export default function BasicTextFields(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');


  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <Box
      className='form'
      
      sx={{
        '& > :not(style)': { m: 2, width: '50ch', display: 'flex', flexDirection:'column' },
      }}
      noValidate 
      autoComplete="off"

    >
      <TextField id="first-name" label="Adınız" variant="outlined" value={firstName} onChange={handleFirstNameChange}  />
      <TextField id="last-name" label="Soyadınız" variant="outlined" value={lastName} onChange={handleLastNameChange} />
      <TextField type='number' id="phone-number" label="Telefon Numaranız" variant="outlined" value={phoneNumber} onChange={handlePhoneNumberChange} />
      <TextField type="email"  label="Email Adresiniz" variant="outlined" value={email} onChange={handleEmailChange} />
      <Button type="submit" className='formBtn' firstName={firstName} lastName={lastName} email={email} phoneNumber={phoneNumber}></Button>
    </Box>
  );
}
