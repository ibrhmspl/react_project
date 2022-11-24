import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import NavbarCode from './NavbarCode';
import { useNavigate } from 'react-router-dom';



export default function BasicCard() {
  const navigate = useNavigate();
  function deneme(){
    navigate('/CategoryManagement')
  }
  function deneme1(){
    navigate('/ProductManagement')
  }
  function deneme2(){
    navigate('/Products')
  }
  return (
    <>
    <NavbarCode/>
    <br/><br/><br/>


    <Card sx={{maxWidth: 1200,height:150, display: "flex",  marginLeft:'auto', marginRight:'auto' }}>
      <CardContent>
        
        <Typography variant="h5" component="div">
          Main Categories
          <br/>
          <br/>
        </Typography>
        <Typography variant="h5" component="div">
          Sub-Categories
        </Typography>
        <Typography variant="h5" component="div" sx={{position:'absolute',  right:"800px", top:"144px" , minWidth: 200 }}>
          Total 20
        </Typography>
        <Typography variant="h5" component="div"sx={{position:'absolute',  right:"800px", top:"208px" , minWidth: 200 }}>
          Total 20
        </Typography>

      </CardContent>
      <CardActions>
      <Button onClick={deneme} sx={{position:'absolute',  right:"200px" , minWidth: 200 }}  variant="contained"  disableElevation>
      Category Managements
      </Button>
      </CardActions>
    </Card>
    <br/>
    <br/>
    <br/>



    <Card sx={{maxWidth: 1200,height:150, display: "flex",  marginLeft:'auto', marginRight:'auto' }}>
      <CardContent>
        
        <Typography variant="h5" component="div" >
        <br/>
          Products 
        </Typography>
        <Typography variant="h5" component="div"sx={{position:'absolute',  right:"800px", top:"390px" , minWidth: 200 }}>
          Total 20
        </Typography>
        
      </CardContent>
      <CardActions>
      <Button onClick={deneme1} sx={{position:'absolute', right:"200px" , minWidth: 200 }} variant="contained"  disableElevation> 
           Products Managements
      </Button>
      </CardActions>
    </Card>


    <br/>
    <br/>
    <br/>
    
    <span style={{ position:'relative', left: '500px'  }}>
    <Button onClick={deneme2} variant="contained"  disableElevation>
      Show All Products
      </Button>
      </span>
    </>
  );
}
