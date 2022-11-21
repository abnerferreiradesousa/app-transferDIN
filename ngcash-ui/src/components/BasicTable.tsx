import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ITransactionSerial } from '../interfaces';


export default function BasicTable({rows}: {rows: ITransactionSerial[]}) {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Código</TableCell>
              <TableCell align="right">Valor</TableCell>
              <TableCell align="right">Origem</TableCell>
              <TableCell align="right">Destino</TableCell>
              <TableCell align="right">Data da transferência</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row: ITransactionSerial) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">R$ {row.value.toFixed(2)}</TableCell>
                <TableCell align="right">{row.debitedName}</TableCell>
                <TableCell align="right">{row.creditedName}</TableCell>
                <TableCell align="right">{String(row.createdAt).replace("T", "")}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
