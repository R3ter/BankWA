import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useQuery } from "@apollo/client";

import "./App.css";

import { Button } from "@mui/material";
import { GET_ALL_USERS } from "./API/Query";
import IUser from "./Interfaces/IUser";
import Deposit from "./components/Deposit/Deposit";
function App() {
  const { loading, error, data, refetch } = useQuery<IUser>(GET_ALL_USERS);

  return (
    <div className="App">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>passport number</TableCell>
              <TableCell align="right">name</TableCell>
              <TableCell align="right">credit</TableCell>
              <TableCell align="right">cash</TableCell>
              <TableCell align="right">role</TableCell>
              <TableCell align="right">Active</TableCell>
              <TableCell align="right">Deposit</TableCell>
              <TableCell align="right">edit credit</TableCell>
              <TableCell align="right">Transfer</TableCell>
              <TableCell align="right">withdraw</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data.getAllUsers.map((row) => (
                <TableRow
                  key={"row.name"}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.passportNumber}
                  </TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.credit}</TableCell>
                  <TableCell align="right">{row.cash}</TableCell>
                  <TableCell align="right">{row.role}</TableCell>
                  <TableCell align="right">{row.active + ""}</TableCell>

                  <TableCell align="right">
                    <Deposit
                      refetch={refetch}
                      userPassport={row.passportNumber + ""}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <Button variant="outlined" color="secondary">
                      edit credit
                    </Button>
                  </TableCell>
                  <TableCell align="right">
                    <Button variant="outlined" color="secondary">
                      Transfer
                    </Button>
                  </TableCell>
                  <TableCell align="right">
                    <Button variant="outlined" color="secondary">
                      withdraw
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default App;
