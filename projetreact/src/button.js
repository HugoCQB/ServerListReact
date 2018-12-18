import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function OutlinedButtons(props) {
  const { classes } = props;
  return (
    <div>
      <Button variant="outlined" className={classes.button}>
        EDIT
      </Button>
      <Button variant="outlined" color="primary" className={classes.button}>
        START
      </Button>
      <Button variant="outlined" color="secondary" className={classes.button}>
        Delete
      </Button>
      <input
        accept="image/*"
        className={classes.input}
        id="outlined-button-file"
        multiple
        type="file"
      />
    </div>
  );
}

OutlinedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedButtons);
