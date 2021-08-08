import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      equityModels: [],
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    axios
      .get("/api/models/")
      .then((res) => this.setState({ equityModels: res.data }))
      .catch((err) => console.log(err));
  };

  renderEquityModels = () => {
    const classes = makeStyles({
      table: {
        minWidth: 650,
      },
    });

    return (
      <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Ticker</TableCell>
              <TableCell>Description</TableCell>
              <TableCell align="right">PE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.equityModels.map((row) => (
              <TableRow key={row.name}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.ticker}</TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell align="right">{row.pe}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  render() {
    return (
      <main className="container">
        <h1 className="text-center my-4">Equity Models</h1>
        <div>
          {this.renderEquityModels()}
        </div>
      </main>
    );
  }

}

export default App;