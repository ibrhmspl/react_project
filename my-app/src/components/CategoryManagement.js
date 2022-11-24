import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import NavbarCode from './NavbarCode';
import AddParentModal from '../modals/AddParentModal'
import AddSubModal from '../modals/AddSubModals';
import {getcategories}  from '../redux/actions/categoriesAction';
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { getsubcategories } from '../redux/actions/subCategoriesActions';
import EditModal from '../modals/EditModal';
import { Button } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(id,sub, parents) {
  return {id, sub, parents };
}

const rows = [
  createData(1,'Mobile phone', 'Tech'),
  createData(2,'Laptop', 'Tech'),
  createData(3,'PC', 'Tech'),
];


export default function CategoryManagement() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getcategories());
    dispatch(getsubcategories());
  }, []);
  
  const categories = useSelector((state) => state.categoriesReducer);
  const subCategories = useSelector((state) => state.subCategoriesReducer);

  return (
    <>
    
    <NavbarCode/>
    <br/><br/><br/>
    
    <AddParentModal/>
    <AddSubModal/> 
    
    <br/>
    <br/>


    <Table sx={{maxWidth: 1000, marginLeft:'auto', marginRight:'auto' }} aria-label="customized table">
        <TableHead >
          <TableRow>
            <StyledTableCell >Sub-Categories</StyledTableCell>
            <StyledTableCell align="left">Parent-Categories</StyledTableCell>
            <StyledTableCell align="left">Action&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {categories.map((category) => (
            subCategories.map((subCategory) =>(
            category.id === subCategory.category_id ?
            <StyledTableRow  key={subCategory.id}>
              <StyledTableCell component="th" scope="row">
                {subCategory.name}
              </StyledTableCell>
              <StyledTableCell >{category.name}</StyledTableCell>
              <StyledTableCell align="left">
              <EditModal/>
              </StyledTableCell>
            </StyledTableRow>:null
          ))))}
        </TableBody>
      </Table>
      
    </>
  );
}
