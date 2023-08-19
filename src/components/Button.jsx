import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function ColorButtons(props) {

   const [personelInfo, setPersonelInfo] = useState([])

   const handlePersonel = () => {
    personelInfo.push([{
    ad: props.firstName,
    soyad: props.lastName,
    email: props.email,
    numara: props.phoneNumber
   }])
   console.log(personelInfo)
  }

  


  return (
  
     
      <Button  variant="contained" color="success" onClick={handlePersonel}>
        İletişime Geç
      </Button>
      

  );
}