import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from 'react-router-dom';

export default function ColorButtons() {

  const navigate = useNavigate()

  return (
 
      <Button onClick={()=> {navigate('/Hakımmda/BenKimim')}} variant="outlined" color="success" endIcon={<InfoIcon></InfoIcon>}>
        Ben Kimim ?
      </Button>
     
  );
}