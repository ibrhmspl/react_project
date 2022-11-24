import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { postcategories } from '../redux/actions/categoriesAction';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height: 120,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [name, setName] = React.useState('');

  const onChangeName = (e) => {
    const name = e.target.value;
    setName(name);
  };

  const handlePost = (e) => {
    e.preventDefault();
    
    if (name) {
      dispatch(postcategories(name))
        .then((data) => {
            console.log(data);
        })
        .catch();
    } else {
      
      alert("gerekli alanlar boş olamaz");
    }
  };



  return (
    <div>
      <Button onClick={handleOpen} style={{background:'grey',color:'black', position:'absolute', left: '500px', top:'100px' }}>Add Parent Categories</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" >
            Add Parent Category
          </Typography>
          <TextField id="outlined-basic" style={{width:500, top:'8px'}} label="Add Parent Category" variant="outlined"onChange={onChangeName} />
          <Button onClick={handlePost} variant="contained" style={{top:'20px', left:'200px'}}>Save</Button>
        </Box>
      </Modal>
    </div>
  );
}
