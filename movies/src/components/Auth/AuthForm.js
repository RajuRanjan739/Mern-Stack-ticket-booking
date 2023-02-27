import { Button, Dialog, FormLabel, IconButton, TextField, Typography } from '@mui/material'
import {  Box } from '@mui/system'
import React, { useState } from 'react'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Link } from 'react-router-dom';

const labelStyle={marginTop:1,marginBottom:1}
const AuthForm = ({onSubmit,isAdmin}) => {
  const[inputs,setInputs]= useState({
    name:'',
    email:'',
    password:'',
  })
  const[isSignup, setIsSignup]= useState(false);
  const handleChange=(e)=>{
    setInputs((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value,
    }));
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    //console.log(inputs);
    onSubmit({inputs,signup:isAdmin?false:isSignup})
  };
  return (
    <Dialog PaperProps={{style:{borderRadius:20}}} open={true}>
      <Box 
      sx={{marginLeft:'auto',padding:1}}>
        <IconButton LinkComponent={Link} to="/">
          <CloseRoundedIcon />
        </IconButton>
      </Box>
        <Typography 
        variant='h4'
        textAlign={'center'}>
            {isSignup ?"Signup":"Login"}
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box
          padding={6} 
          display={'flex'}
          justifyContent={'center'}
          flexDirection='column'
          width={400}
          margin='auto'
          alignContent={'center'}>
              { !isAdmin && isSignup &&(
              <>
              {" "}
               <FormLabel sx={labelStyle} >Name</FormLabel>
            <TextField 
             value={inputs.name}
             onChange={handleChange}
             margin='normal'
             variant='standard'
              type={'text'}
              name='name' 
              />
              </>
              )}
            <FormLabel sx={labelStyle} >Email</FormLabel>
            <TextField 
             value={inputs.email}
             onChange={handleChange}
             margin='normal'
             variant='standard'
              type={'email'}
              name='email' />
            <FormLabel sx={labelStyle}>Password</FormLabel>
            <TextField
            value={inputs.password}
            onChange={handleChange} 
            margin='normal'
             variant='standard'
              type={'password'} 
              name='password' />
              <Button 
              sx={{marginTop:2,borderRadius:10,bgcolor:'#3e2723'}}
              type='submit'
              fullWidth
              variant='contained'>
                {isSignup ?"Signup":"Login"}
                </Button>

              {!isAdmin && (<Button 
              onClick={()=>setIsSignup(!isSignup)}
              sx={{marginTop:2,borderRadius:10}}
              fullWidth
              >SWITCH To {isSignup?"Login":"Signup"}
              </Button>)}
          </Box>
        </form>
    </Dialog>

  )
}

export default AuthForm