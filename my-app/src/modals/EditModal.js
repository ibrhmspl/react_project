import  React,{useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useDispatch } from 'react-redux';
import { getcategories } from '../redux/actions/categoriesAction';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useSelector } from 'react-redux';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { TextField } from '@mui/material';
import { getsubcategories } from '../redux/actions/subCategoriesActions';
import { putcategories } from '../redux/actions/categoriesAction';
import { putsubcategories } from '../redux/actions/subCategoriesActions';
import { deletecategories } from '../redux/actions/categoriesAction';
import { deletesubcategories } from '../redux/actions/subCategoriesActions';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height: 'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  
  const [categoryId, setCategoryId] = React.useState('');
  const [subCategoryId, setSubCategoyId] =React.useState('');
  const [name, setName] = React.useState('');
  const [subName, setSubName] = React.useState('');
  
  const onChangeName = (e) => {
    const name = e.target.value;
    setName(name);
  };
  const handleChange = (e) => {
    setCategoryId(e.target.value);
  }

  const onChangeSubName = (e) => {
    const subName = e.target.value;
    setSubName(subName);
  };

  const handleChangeSub = (e) => {
    setSubCategoyId(e.target.value);
  }
  useEffect(() => {
    dispatch(getcategories());
  },[]);
  useEffect(() => {
    dispatch(getsubcategories());
  },[]);

  const category = useSelector((state) => state.categoriesReducer);
  const subCategory = useSelector((state) => state.subCategoriesReducer);

  const handlePut = (e) => {
    e.preventDefault();
    dispatch(putcategories(categoryId,name));
  };

  const handleSubPut = (e) => {
    e.preventDefault();
    dispatch(putsubcategories(subCategoryId,categoryId,subName));
  };

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deletecategories(categoryId));
  };

  const handleSubDelete = (e) => {
    e.preventDefault();
    dispatch(deletesubcategories(subCategoryId));
  };

  return (
    <div>
      <Button onClick={handleOpen}>Edit</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Edit ParentCategory</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">ParentCategory</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={categoryId}
          onChange={handleChange}
          style={{width:400}}
        >
          {category?.map((item)=>(
          <MenuItem key={item.id} value={item.id}>{item.name} </MenuItem>
          ))}
        </Select>
        </FormControl>
        <TextField id="outlined-basic" style={{width:'auto', top:'8px'}}  variant="outlined" onChange={onChangeName}/><br/><br/>
        <Button onClick={handlePut} variant="contained" >Update</Button> 
        <Button onClick={handleDelete} style={{left:50}} variant="contained" >Delete</Button>
        
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Edit SubCategory</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">ParentCategory</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={categoryId}
          onChange={handleChange}
          style={{width:400}}
        >
          {category?.map((item)=>(
          <MenuItem key={item.id} value={item.id}>{item.name} </MenuItem>
          ))}
        </Select>
        </FormControl>
          <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">SubCategory</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={subCategoryId}
          onChange={handleChangeSub}
          style={{width:400}}
        >
          {subCategory?.map((item)=>(
          <MenuItem key={item.id} value={item.id}>{item.name} </MenuItem>
          ))}
        </Select>
        </FormControl>
        <TextField id="outlined-basic" style={{width:'auto', top:'8px'}}  variant="outlined" onChange={onChangeSubName}/><br/><br/>
        <Button onClick={handleSubPut} variant="contained" >Update</Button> 
        <Button onClick={handleSubDelete} style={{left:50}} variant="contained" >Delete</Button>
        </AccordionDetails>
      </Accordion>
        </Box>
      </Modal>
    </div>
  );
}
