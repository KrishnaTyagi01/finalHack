import { useTheme } from '@material-ui/core/styles';
import React from 'react';
import Title from './Title';
import Typography from "@material-ui/core/Typography";
import { isAuthenticated } from '../../utils/auth';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'

export default function Charts() {
  const userData = isAuthenticated();
  console.log(userData);
  const theme = useTheme();

  return (
    <>
    <div style={{display:"flex", justifyContent:"space-between"}}>
      <div>
      <Title >WELCOME, <span style={{textTransform:"capitalize", color:"black"}}>{userData.name}</span></Title>
    <Typography style={{fontSize:"0.9rem",textTransform:'uppercase'}}>Manage your student life from one place</Typography>
      </div>
      <Button variant="contained" color="primary" style={{height:"40px"}} >
        <Link to="/resumedata" style={{color:'white'}}>Create Resume</Link>
        
      </Button>
    </div>
      
     
      <Button variant="contained" color="primary" >
      <Link to="/grades" style={{color:'white',width:"100%"}}><b>Grades</b></Link>
      </Button>
      <Button variant="contained" color="primary">
      <Link to="/assignment" style={{color:'white',width:"100%"}}><b>Assignments</b></Link>
      </Button>
      <Button variant="contained" color="primary">
      <Link to="/courses" style={{color:'white',width:"100%"}}><b>Courses</b></Link>
      </Button>
      <Button variant="contained" color="primary">
      <Link to="/jobs" style={{color:'white',width:"100%"}}><b>Jobs</b></Link>
      </Button>
    
    </>
  );
}