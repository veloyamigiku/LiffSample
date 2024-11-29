import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function LiffEnvTable({ envObj }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: '200px', margin: '0 auto' }} aria-label='Liff Env Table'>
        <TableHead>
          <TableRow>
            <TableCell align='center'><b>項目</b></TableCell>
            <TableCell align='center'><b>値</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(envObj).map((key, index) => (
            <TableRow key={index}>
              <TableCell>{key}</TableCell>
              <TableCell>{envObj[key] + ""}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
