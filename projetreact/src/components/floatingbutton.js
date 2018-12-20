import React from 'react';
import PropTypes from 'prop-types';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';
import "../css/floatingbutton.css"
import Button from "@material-ui/core/Button";
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },


  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 30,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    top: 200,
    left: 650,
  },

  confirmationPaper: {
    position: 'absolute',
    width: theme.spacing.unit * 100,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    top: 400,
    left: 600,
  }

});

function FloatingActionButtons(props) {
  const { classes } = props;
  return (
    <div id="float-button">
      <Fab color="primary" aria-label="Add" className='add'>
        <AddIcon />
      </Fab>
    </div>
  );
}

  function rand() {
    return Math.round(Math.random() * 20) - 10;
  }



function SimpleModalWrapped() {
  return;
}



export class SimpleModal extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };


  confirmationClose = () => {
    this.setState({ open: false });
  };

  confirmationOpen = () => {
    this.setState({ open: true });
  };

  handleChange = name => event => {
   this.setState({
     [name]: event.target.value,
   });
 };



  render() {
    const { classes } = this.props;

  return (
      <div>
        <Fab color="primary" onClick={this.handleOpen} aria-label="Add" className='add'>
          <AddIcon />
        </Fab>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >

            <div className={classes.paper}>

            <div className={classes.Grid}>

            <Grid container spacing={16}
              container
              direction="column"
              justify="center"
              alignItems="center"
            >


             <Grid item xs>

             <TextField
         id="outlined-name"
         label="ServerID"
         className={classes.textField}
         value={this.state.id}
         onChange={this.handleChange('id')}
         margin="normal"
         variant="outlined"
       />

            </Grid>


            <Grid item xs>

            <TextField
        id="ServerName"
        label="ServerName"
        className={classes.textField}
        value={this.state.name}
        onChange={this.handleChange('name')}
        margin="normal"
        variant="outlined"
      />

            </Grid>

            <Grid item xs>

            <TextField
        id="outlined-name"
        label="ServerOwner"
        className={classes.textField}
        value={this.state.owner}
        onChange={this.handleChange('owner')}
        margin="normal"
        variant="outlined"
      />

            </Grid>



            <Grid item>


            <TextField
        id="outlined-name"
        label="ServersProjects"
        className={classes.textField}
        value={this.state.project}
        onChange={this.handleChange('project')}
        margin="normal"
        variant="outlined"
      />

            </Grid>
          </Grid>




              <Grid container spacing={24}
              justify="center"
              alignItems="center"
              >


            <Grid item xs={24}>

              <Button variant="outlined" href="#outlined-buttons" color="primary" onClick={this.confirmationOpen}  className={classes.button}>
                Submit
              </Button>

            </Grid>



            <Grid item xs={24}>
              <Button variant="outlined" href="#outlined-buttons" color="secondary" onClick={this.handleClose} className={classes.button}>
                Cancel
              </Button>

            </Grid>
          </Grid>


            </div>
            </div>
        </Modal>
      </div>
    );
  }
}

export default withStyles(styles)(SimpleModal);
