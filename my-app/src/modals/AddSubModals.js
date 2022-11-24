import  React,{useEffect} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { postsubcategories } from '../redux/actions/subCategoriesActions';
import { useDispatch } from 'react-redux';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useSelector } from 'react-redux';
import { getcategories } from '../redux/actions/categoriesAction';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height: 200,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const [name, setName] = React.useState('');
  const dispatch = useDispatch();
  const onChangeName = (e) => {
    const name = e.target.value;
    setName(name);
  };
  
  const [categoryId, setCategoryId] = React.useState('');
  const handleChange = (e) => {
    setCategoryId(e.target.value);
  }
  useEffect(() => {
    dispatch(getcategories());
  },[]);
  const category = useSelector((state) => state.categoriesReducer);

  const handleSubPost = (e) => {
    e.preventDefault();
    dispatch(postsubcategories(categoryId,name));
  };

  return (
    <>
      <Button onClick={handleOpen} style={{background:'grey',color:'black', position:'absolute', left: '800px', top:'100px'  }}>Add Sub Categories</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        
        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">ParentCategory</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={categoryId}
          onChange={handleChange}
        >
          {category?.map((item)=>(
          <MenuItem key={item.id} value={item.id}>{item.name} </MenuItem>
          ))}
        </Select>
        </FormControl>

          <TextField id="outlined-basic" style={{width:500, top:'8px'}} label="Add Sub Category" variant="outlined" onChange={onChangeName}/>
          <Button onClick={handleSubPost} variant="contained" style={{top:'20px', left:'200px'}}>Save</Button>
        </Box>
      </Modal>
    </>
  );
}
