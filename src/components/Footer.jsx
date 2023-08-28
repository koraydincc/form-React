import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <div className='footer'>
        <div className='mainFooter'>
          <div className='Logo'>
              <img src="../images/original.png" alt="" />
          </div>
          <div className='contact'>
              <h3>İletişim İçin</h3>
              <a  href='https://instagram.com/oguzhannleventt?igshid=OGQ5ZDc2ODk2ZA=='> <InstagramIcon style={{fontSize:'50px'}}></InstagramIcon></a>
          </div>
         
        </div>
        
       
    </div>
  )
}

export default Footer
