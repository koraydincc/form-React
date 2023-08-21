import React, { useState } from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export default function ColorButtons(props) {
  const [personelInfo, setPersonelInfo] = useState([]);

  const handlePersonel = () => {
    if (props.firstName === '' || props.lastName === '' || props.email === '' || props.phoneNumber === '') {
      alert('Lütfen tüm alanları doldurun !');
      return;

    }

    const newPersonelInfo = {
      ad: props.firstName,
      soyad: props.lastName,
      email: props.email,
      numara: props.phoneNumber
    };
    console.log(newPersonelInfo)
    // personelInfo dizisine newPersonelInfo yu ekledik
    setPersonelInfo([...personelInfo, newPersonelInfo]);
    
    
    

    

    alert(`Merhaba ${props.firstName} ${props.lastName}, en kısa zamanda sizinle iletişime geçeceğim. Sağlıklı günler dilerim..`);
  };

  return (
    <div>
      <Button endIcon={<SendIcon></SendIcon>} type="button" variant="contained" color="success" onClick={handlePersonel}>
        İletişime Geç
      </Button>
    </div>
  );
}
