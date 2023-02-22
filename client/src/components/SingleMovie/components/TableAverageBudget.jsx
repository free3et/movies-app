import CircularProgress from "@mui/material/CircularProgress";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const TableAverageBudget = ({ vote_average, budget, revenue }) => {
  function createData(vote, budget, revenue) {
    return { vote, budget, revenue };
  }

  const rows = [createData(vote_average, budget, revenue)];
  return (
    <TableContainer>
      <Table sx={{ minWidth: 300 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                color: "#1ed5a9",
              }}
              align="center"
            >
              Vote Average
            </TableCell>
            <TableCell
              sx={{
                color: "#ed9f35",
              }}
              align="center"
            >
              Budget
            </TableCell>
            <TableCell
              align="center"
              sx={{
                color: "#d93b3b",
              }}
            >
              Revenue
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.vote}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                <Box
                  sx={{
                    position: "relative",
                    display: "inline-flex",
                  }}
                >
                  <CircularProgress
                    variant="determinate"
                    value={(vote_average / 10) * 100}
                    color="success"
                    size={55}
                  />
                  <Box
                    sx={{
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      position: "absolute",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      variant="caption"
                      component="div"
                      color="secondary"
                    >
                      {`${vote_average?.toFixed(2)}`}
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "#ffffff",
                }}
              >
                {row.budget}$
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "#ffffff",
                }}
              >
                {row.revenue}$
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
