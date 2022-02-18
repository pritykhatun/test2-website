import { Container, Grid, Typography,Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Link,useLocation,useHistory } from 'react-router-dom';
import loginimage from '../../images/login.png';
import './Login.css';

const Registration = () => {
    const [loginData,setLoginData] = useState({})
    const location = useLocation();
    const history = useHistory();

 const handleOnChange = e => {
      const field = e.target.name;
     const value = e.target.value;
     console.log(field,value);
      const newLoginData = {...loginData};
     newLoginData[field] = value;
      setLoginData(newLoginData);
}

    const handleLoginSubmit = e => {
         alert('hello');
    }

    const handleGoogleSignIn = () => {
       
     }
    return (
        <div>
           <h1 className='fw-bold fs-1 text-center mt-5'>Please Register</h1>
            <div class="container">
  <div class="row">
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <form onSubmit={handleLoginSubmit} className="login text-white login">
<TextField 
sx={{width:'75%', m:1}}
name="email"
id="standard-basic" 
label="Your Email"
onChange={handleOnChange}
 variant="standard"

  />
<TextField
sx={{width:'75%', m:1}}
name="password"
          id="standard-basic"
          label="Your Password"
          onChange={handleOnChange}
          type="password"
          variant="standard"
/>
<TextField
sx={{width:'75%', m:1}}
name="password2"
          id="standard-basic"
          label="Retype Password"
          onChange={handleOnChange}
          type="password"
          variant="standard"
/>
<Button sx={{width:'50%', m:1}} variant="contained" type="submit" className='bg-dark text-white'>Login</Button>
<Link style={{textDecoration:'none', }} to="/login">
<Button variant="text" className="text-dark fw-bold">Already Registered? Please Login</Button>

</Link>

</form>
<p>.................................</p>
    
 <Button onClick={handleGoogleSignIn} className="bg-dark text-white px-2 pe-4  pt-3 pb-2 mb-5"><i class="fab fa-google px-3 fs-3"></i>Sign In With Google</Button>
    </div>
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
     <img src={loginimage} className='img-fluid w-100 mt-5'></img>
    </div>
    
  </div>
</div> 
        </div>
    );
};

export default Registration;