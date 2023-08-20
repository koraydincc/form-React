import React, { useState } from 'react';
import Button from '@mui/material/Button';

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

    

    alert(`Merhaba ${props.firstName} ${props.lastName}, en kısa zamanda iletişime geçeceğim. Sağlıklı günler dilerim..`);
  };

  return (
    <div>
      <Button type="button" variant="contained" color="success" onClick={handlePersonel}>
        İletişime Geç
      </Button>
    </div>
  );
}
