


import React from 'react'

function TranactionTable() {
  return (
    <TableContainer component={Paper} sx={{ maxWidth: "50%" }}>
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

export default TranactionTable