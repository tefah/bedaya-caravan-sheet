import React from 'react';
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
import './checklist.css'
import CheckboxList from './checkboxList';

const styles = {

};

class SimpleDialog extends React.Component {
  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
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
            <CheckboxList options={f.options} setValue={this.props.setValue} />
            
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
    selectedValue: this.props.f.placeholder
  };

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = value => {
    this.setState({ selectedValue: value, open: false });
  };

  change = value => {
    this.setState({ selectedValue: value})
    this.props.setValue(this.props.f.name, value)
  }
  render() {
    return (
      <div className={"checklist-label"}>
        <Typography  variant="subtitle1">{this.props.f.placeholder}</Typography>
        <br />
        <Button  variant="outlined" color="primary" onClick={this.handleClickOpen}>
        {this.state.selectedValue.toString()}
        </Button>
        <SimpleDialogWrapped
          selectedValue={this.state.selectedValue}
          open={this.state.open}
          onClose={this.handleClose}
          f={this.props.f}
          change={this.change}
          setValue={this.props.setValue}
        />
      </div>
    );
  }
}

export default Checklist;