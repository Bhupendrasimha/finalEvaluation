import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});
function StudentsID(props) {
  const classes = useStyles();

  const data = props.data.test;
  console.log(data);
  return (
    <>
      <h1>Student Name : {props.data.name}</h1>
      <h3>Gender : {props.data.gender}</h3>
      <h3>Grade : {props.data.grade}</h3>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="right">Dates</StyledTableCell>
              <StyledTableCell align="right">Subjects</StyledTableCell>
              <StyledTableCell align="right">Marks</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) =>
              item.report.map((d) => (
                <StyledTableRow key={d._id}>
                  <StyledTableCell align="right">{d.date}</StyledTableCell>
                  <StyledTableCell align="right">{d.subject}</StyledTableCell>
                  <StyledTableCell align="right">{d.marks}</StyledTableCell>
                </StyledTableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
export default StudentsID;
