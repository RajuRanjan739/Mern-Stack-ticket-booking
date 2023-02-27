import { Box } from '@mui/system';
import React, { Fragment, useEffect, useState } from 'react'
import {  getAdminById } from '../api-helpers/api-helpers'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {  List, ListItem, ListItemText, Typography } from '@mui/material';




const AdminProfile = () => {
    const[admin,setAdmin]=useState()

    useEffect(()=>{
        getAdminById()
         .then((res)=>setAdmin(res.admin))
         .catch((err)=>console.log(err))
       },[]);

  return (
    <Box width={'100%'} display="flex">
        <Fragment>
        {" "}
        {admin && <Box 
      flexDirection={'column'} 
      justifyContent='center' 
      alignItems={'center'} 
      width={'30%'}>
        <AccountCircleIcon sx={{fontSize:"10rem"}} />
        <Typography 
padding={1} 
width={'auto'} 
textAlign={'center'}
border={'1px solid #4db6ac'}
borderRadius={6}>
  Email:{admin.email}
  </Typography>
        </Box>
        }
        { admin && admin.addedMovies.length > 0 && ( 
     <Box width={'70%'} display='flex' flexDirection={'column'}>
        <Typography variant='h3'
        fontFamily={'verdana'}
        textAlign='center'
        padding={2}>
          Added Movies
        </Typography>
        <Box margin={'auto'}
         display='flex'
         flexDirection={'column'}
         width='80%'>
            <List>
            {admin.addedMovies.map((movie,index)=>(
              <ListItem sx={{
              bgcolor:'#3f51b5',
              color:'white',
              textAlign:'center',
              margin:1,
            }}
            >
                <ListItemText sx={{margin:1,
              width:'auto',
              textAlign:'left'}}>
                Movie:{movie.title}
              </ListItemText>
            </ListItem>
            ))}
            </List>
         </Box>
        </Box>
        )}
        </Fragment>
    </Box>
    
  
    
  )
}

export default AdminProfile