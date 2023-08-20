import React from 'react';
import Avatar from "../components/Avatar"; // Make sure the path is correct
import TextField from "../components/Textfield"; // Make sure the path is correct

function MainPage(props) {
  const submitForm = (e) => {
    e.preventDefault();
    
    
  };

  return (
    <div className="MainPage">
      <form onSubmit={submitForm} className="form">
        <Avatar /> 
        <h4>Herbalife Yaşam Koçu: Oğuzhan Levent</h4>
        <TextField /> 
       
      </form>
    </div>
  );
}

export default MainPage;
