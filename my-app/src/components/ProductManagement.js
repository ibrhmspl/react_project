import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import NavbarCode from './NavbarCode';

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

function createData(product,parents,sub ) {
  return { sub, parents,product };
}

const rows = [
  createData('IPhone','Mobile phone', 'Tech'),
  createData('monster','Laptop', 'Tech'),
  createData('SAMSUNG','Mobile phone', 'Tech'),
  
];

export default function CustomizedTables() {
  return (
    <>
    <NavbarCode/>
    <br/><br/><br/>
    <span style={{ position:'relative', left: '700px'  }}>
    <Button  variant="contained"  disableElevation>
      Add Products
      </Button>
      </span>
    
    <br/>
    <br/>
    <br/>
    
    
    <Table sx={{maxWidth: 1000, marginLeft:'auto', marginRight:'auto' }} aria-label="customized table">
        <TableHead >
          <TableRow>
          <StyledTableCell >Product Name</StyledTableCell>
            <StyledTableCell align="left" >Sub-Categories</StyledTableCell>
            <StyledTableCell align="left">Parent-Categories</StyledTableCell>
            <StyledTableCell align="left">Action&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.product}
              </StyledTableCell>
              <StyledTableCell >{row.parents}</StyledTableCell>
              <StyledTableCell >{row.sub}</StyledTableCell>
              <StyledTableCell align="left">
              <Button  variant="contained"  disableElevation>
              Edit
              </Button>
              
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    
    </>
  );
}
