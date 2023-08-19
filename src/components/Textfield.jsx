import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Button from "./Button"

export default function BasicTextFields() {
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
      component="form"
      sx={{
        '& > :not(style)': { m: 2, width: '50ch', display: 'flex', flexDirection:'column' },
      }}
      noValidate
      autoComplete="off"

    >
      <TextField id="first-name" label="Adınız" variant="outlined" value={firstName} onChange={handleFirstNameChange} />
      <TextField id="last-name" label="Soyadınız" variant="outlined" value={lastName} onChange={handleLastNameChange} />
      <TextField id="phone-number" label="Telefon Numaranız" variant="outlined" value={phoneNumber} onChange={handlePhoneNumberChange} />
      <TextField id="email" label="Email Adresiniz" variant="outlined" value={email} onChange={handleEmailChange} />
      <Button className='formBtn' firstName={firstName} lastName={lastName} email={email} phoneNumber={phoneNumber}></Button>
    </Box>
  );
}
