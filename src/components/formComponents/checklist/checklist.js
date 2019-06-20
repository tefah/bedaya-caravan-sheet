import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import { TextField, DialogActions } from '@material-ui/core';
import './checklist.css'
import CheckboxList from './checkboxList';

const styles = {

};

class SimpleDialog extends React.Component {
  handleClose = () => {
    this.props.onClose();
  };

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
            <CheckboxList options={f.options} setValue={(value) => this.props.change(value)} />
            
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

class Checklist extends React.Component {
  state = {
    open: false,
    selectedValue: this.props.input.value===''?this.props.f.placeholder:this.props.input.value
  };

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = () => {
    this.setState({ selectedValue: this.props.input.value, open: false });
  };

  
  change = (value) => {
    console.log("VALUEEEEEEEE: ", value)
    if (value[Object.keys(value)[0]] === 0)
      value.splice(0,1)
    

    // console.log("VALUEEEEEEEE: ", value)
    // console.log("VALUEEEEEEEE: ", this.state.selectedValue)
    // value = value[Object.keys(value)[0]] !== 0?value:delete value[0]
    // console.log("VALUEEEEEEEE: ", typeof(value))
    this.setState({ selectedValue: value})
    this.props.input.onChange(value.toString())

  }
  render() {
    // const {
    //   input: { value, onChange }
    // } = this.props
    return (
      <div className={"checklist-label"}>
        <Typography  variant="subtitle1">{this.props.f.placeholder}</Typography>
        <br />
        <Button  variant="outlined" color="primary" onClick={this.handleClickOpen}>
        {this.state.selectedValue.toString()}
        </Button>
        <SimpleDialogWrapped
          open={this.state.open}
          onClose={this.handleClose}
          f={this.props.f}
          change={this.change}
        />
      </div>
    );
  }
}

export default Checklist;