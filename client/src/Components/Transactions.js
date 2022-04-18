
// import React from 'react'
// import { Box, List, ListItem, ListItemIcon, Divider, ListItemButton, ListItemText } from '@mui/material';
// import { SubjectOutlined } from '@material-ui/icons';

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { maxWidth } from '@mui/system';


function createData(Address, Weight) {
  return {Address, Weight };
}

const rows = [
  createData("0xe76dCAaf41801759dfF", 100),
  createData("0xe76dCAaf41801759dfF", 100),
  createData("0xe76dCAaf41801759dfF", 100),
  createData("0xe76dCAaf41801759dfF", 100),
];

function Transactions() {
  return (

      <TableContainer component={Paper} sx={{maxWidth: "50%"}}>
        <Table sx={{ maxWidth: "100" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Address</TableCell>
              <TableCell align="right"> Weight</TableCell>

            </TableRow>
          </TableHead>
          
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.Address}
                </TableCell>
                <TableCell align="right">{row.Weight}</TableCell>
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

  );
}

export default Transactions