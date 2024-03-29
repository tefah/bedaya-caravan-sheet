import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import { TextField, DialogActions } from '@material-ui/core';
import './selectlist.css'

const styles = {

};

class SimpleDialog extends React.Component {

  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };

  handleListItemClick = value => {
    this.props.onClose(value);
  };
   addOption = () => {

   }

  render() {
    const { classes, onClose, selectedValue, f, ...other } = this.props;

    return (
      <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
        <DialogTitle id="simple-dialog-title">{f.placeholder}</DialogTitle>
        <div>
          <List>
          <TextField
              autoFocus
              margin="dense"
              id="optionToBeAdded"
              label={f.placeholder}
              name={f.name}
              type={f.type}
              fullWidth
              onChange={value => this.props.change(value.target.value)}
            />
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Add Option
              </Button>
            </DialogActions>
            {f.options.map(option => (
              <ListItem button onClick={() => this.handleListItemClick(option)} key={option}>
                <ListItemText primary={option} />
              </ListItem>
            ))}
            
          </List>
        </div>
      </Dialog>
    );
  }
}

SimpleDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  selectedValue: PropTypes.string,
  change: PropTypes.func
};

const SimpleDialogWrapped = withStyles(styles)(SimpleDialog);


class Selectlist extends Component {
  state = {
  open: false,
  selectedValue: this.props.input.value===''?this.props.f.placeholder:this.props.input.value
};

handleClickOpen = () => {
  this.setState({
    open: true,
  });
};

handleClose = (value) => {
  // console.log("VALUE_WAS: ",this.props.input.value )
  // console.log("VALUE_IS: ",value)
  this.setState({ selectedValue: value, open: false });
  this.props.input.onChange(value)
};


change = value => {
  this.setState({ selectedValue: value})
  this.props.input.onChange(value)
}
render() {
  const {
    input: {  value, onChange }
  } = this.props
  return (
    <div className={"checklist-label"}>
      <Typography  variant="subtitle1">{this.props.f.placeholder}</Typography>
      <br />
      <Button  variant="outlined" color="primary" onClick={this.handleClickOpen}>
        {value === '' ? this.state.selectedValue : value}
      </Button>
      <SimpleDialogWrapped
        selectedValue={value}
        open={this.state.open}
        onClose={this.handleClose}
        f={this.props.f}
        change={onChange}
      />
    </div>
  );
}
}

export default Selectlist;