import { Box } from "@mui/material";
import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";



function createData(Address, Weight) {
  return { Address, Weight };
}

const rows = [
  createData("0xe76dCAaf41801759dfF4eEf0Ab26b8190ae4ad34", 100),
  createData("0xe76dCAaf41801759dfF", 100),
  createData("0xe76dCAaf41801759dfF", 100),
  createData("0xe76dCAaf41801759dfF", 100),
];

function Signers({ posts }) {
  return (
    <Box sx={{ display: "flex" }}>
      <TableContainer component={Paper} sx={{ maxWidth: "100%" }}>
        <Table sx={{ maxWidth: "100%" }} aria-label="simple table">
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
    </Box>
  );
}

export default Signers;
