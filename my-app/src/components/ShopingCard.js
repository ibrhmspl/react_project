import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import NavbarCode from './NavbarCode';


export default function BasicCard() {
    
  return (
    <>
    <NavbarCode/>
    <br/><br/><br/>
    <Card sx={{maxWidth: 1200,height:150, display: "flex",  marginLeft:'auto', marginRight:'auto' }}>
      <CardContent>
        
        <Typography variant="h5" component="div">
        <br/>
          product image
          <br/>
          <br/>
        </Typography>
      </CardContent>
      <CardActions>
      <Button sx={{position:'absolute', right:"200px" , minWidth: 200 }} variant="contained"  disableElevation>
      remove
      </Button>
      </CardActions>
    </Card>
 
    <br/>
    <br/>
    <br/>
    
    <span style={{ position:'relative', left: '700px'  }}>
    <Button   variant="contained"  disableElevation>
      Payment
      </Button>
      </span>
    </>
  );
}
