import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Actions from "./button";
import Statut from "./statut";
import Server from "../css/Servers.css"
import TButton from "./teste"

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});


function createData(id, name, owner, projects, statut, actions) {
  return { id, name, owner, projects, statut, actions };
}

const rows = [
  createData('ServerID', 'ServerName','ServerOwner', 'ServerProjects'),
    createData('ServerID', 'ServerName','ServerOwner', 'ServerProjects'),
      createData('ServerID', 'ServerName','ServerOwner', 'ServerProjects'),
        createData('ServerID', 'ServerName','ServerOwner', 'ServerProjects'),
          createData('ServerID', 'ServerName','ServerOwner', 'ServerProjects'),
            createData('ServerID', 'ServerName','ServerOwner', 'ServerProjects'),
              createData('ServerID', 'ServerName','ServerOwner', 'ServerProjects'),
                createData('ServerID', 'ServerName','ServerOwner', 'ServerProjects'),
                  createData('ServerID', 'ServerName','ServerOwner', 'ServerProjects'),
                    createData('ServerID', 'ServerName','ServerOwner', 'ServerProjects'),
                      createData('ServerID', 'ServerName','ServerOwner', 'ServerProjects'),
                        createData('ServerID', 'ServerName','ServerOwner', 'ServerProjects'),
                          createData('ServerID', 'ServerName','ServerOwner', 'ServerProjects'),
                            createData('ServerID', 'ServerName','ServerOwner', 'ServerProjects'),
                              createData('ServerID', 'ServerName','ServerOwner', 'ServerProjects'),
                                createData('ServerID', 'ServerName','ServerOwner', 'ServerProjects'),
                                  createData('ServerID', 'ServerName','ServerOwner', 'ServerProjects'),
                                    createData('ServerID', 'ServerName','ServerOwner', 'ServerProjects'),
                                      createData('ServerID', 'ServerName','ServerOwner', 'ServerProjects'),
                                        createData('ServerID', 'ServerName','ServerOwner', 'ServerProjects'),
                                          createData('ServerID', 'ServerName','ServerOwner', 'ServerProjects'),
                                            createData('ServerID', 'ServerName','ServerOwner', 'ServerProjects'),
                                              createData('ServerID', 'ServerName','ServerOwner', 'ServerProjects'),
                                                createData('ServerID', 'ServerName','ServerOwner', 'ServerProjects'),
                                                  createData('ServerID', 'ServerName','ServerOwner', 'ServerProjects'),
                                                    createData('ServerID', 'ServerName','ServerOwner', 'ServerProjects'),
                                                      createData('ServerID', 'ServerName','ServerOwner', 'ServerProjects'),
                                                        createData('ServerID', 'ServerName','ServerOwner', 'ServerProjects'),
                                                          createData('ServerID', 'ServerName','ServerOwner', 'ServerProjects'),
                                                            createData('ServerID', 'ServerName','ServerOwner', 'ServerProjects'),
                                                              createData('ServerID', 'ServerName','ServerOwner', 'ServerProjects'),
                                                                createData('ServerID', 'ServerName','ServerOwner', 'ServerProjects'),
                                                                  createData('ServerID', 'ServerName','ServerOwner', 'ServerProjects'),
                                                                    createData('ServerID', 'ServerName','ServerOwner', 'ServerProjects'),
                                                                      createData('ServerID', 'ServerName','ServerOwner', 'ServerProjects'),
                                                                        createData('ServerID', 'ServerName','ServerOwner', 'ServerProjects'),
                                                                          createData('ServerID', 'ServerName','ServerOwner', 'ServerProjects'),
];

class Servers extends Component {
  render() {
      const { classes } = this.props;

      return (
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell className='id'>ID</TableCell>
                <TableCell className='name'>Name</TableCell>
                <TableCell className='owner'>Owner</TableCell>
                <TableCell className='projects'>Projects</TableCell>
                <TableCell className='statut'>Statut</TableCell>
                <TableCell className='actions'>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => {
                return (
                  <TableRow className={classes.row} key={row.id}>

                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.owner}</TableCell>
                    <TableCell>{row.projects}</TableCell>
                    <TableCell>
                      <Statut/>
                    </TableCell>
                    <TableCell>
                      <Actions/>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      );
    }
}

Servers.propTypes = {
  classes: PropTypes.object.isRequired,
};



export default withStyles(styles)(Servers);
