import { Box,Button,Typography } from '@mui/material'
//import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllMovies } from '../api-helpers/api-helpers'
import MovieItem from './Movies/MovieItem'


const HomePage = () => {
  const[movies,setMovies]=useState([])
  useEffect(()=>{
    getAllMovies().then((data)=>setMovies(data.movies))
    .catch((err)=>console.log(err))
  },[]);
  console.log(movies)
  //const navigate=useNavigate();
  return (
    <div>
        <Box width={'100%'} height="100%" margin="auto" marginTop={2}>
        <Box margin={'auto'} width="80%" height={"60vh"} padding={2}>
            <img src='https://media5.bollywoodhungama.in/wp-content/uploads/2020/08/Pathaan-01.jpg' 
            alt='pathaan'
            width={'90%'}
            height='80%'/>
        </Box>
        <Box padding={2} margin="auto">
          <Typography variant="h4" textAlign={'center'} >Latest Releases</Typography>
        </Box>
        <Box 
        display="flex" 
        width="80%" 
        justifyContent={"center"} 
        flexWrap="wrap"
        alignItems={"center"}
        marginLeft={10}>
          {movies && movies.slice(0,4).map((movie,index)=>(<MovieItem 
          id={movie.id} 
          title={movie.title}
          posterUrl={movie.posterUrl}
          releaseDate={movie.releaseDate}
           key={index}/>))}
        </Box>
        <Box display='flex' padding={5} margin="auto" justifyContent={'center'} >
          <Button LinkComponent={Link} to="/movies" variant="outlined" sx={{margin:"auto",color:'black'}}>
            VIEW ALL MOVIES</Button>
        </Box>
        </Box>
    </div>
  )
}

export default HomePage