import React from 'react';
import {connect} from 'react-redux'

import '../mainPage/mainPage.css'
import {getData, setIP} from 'store/main/actions'
import withStyles from '@material-ui/core/styles/withStyles';
import {positions} from  '@material-ui/system';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { TextField } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import MaterialTable from 'material-table'
import Box from '@material-ui/core/Box';


import './HomePage.css'


const styles = theme => ({
  appBar: {
    position: 'relative',
    align: 'center',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 10,
    padding: theme.spacing.unit * 3,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 10,
      padding: theme.spacing.unit * 3,
    },
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit,
  },
});

class HomePage extends React.Component{
  state = {
    refresh: true,
    columns: [
      { title: 'Database code', field: 'patientID' },
      { title: 'Patient Name', field: 'patientName' },
      { title: 'Gender', field: 'gender' },
    ],
    data: [],
  }
  
  onError = (err) =>{alert('ERROR: ', err)}
  onSuccessful = (data) => {
    console.log('>>>>>>>>>>>: ', data)
    this.setState(state=>{
      return{
      data: data
      }
    })
  }

  componentDidMount(){
    // console.log("@@@@@@@@@@@@@@: ", this.props)
    this.props.getData("allpatients", this.onSuccessful, this.onError);
  }

  edit = (data) => {
    this.props.history.push('/addnew', {edit: true, data: data,})
  }
  delete = (data)=> {

  }

  render() {

    const { classes } = this.props;
    const state = this.state

    return (
      <React.Fragment >
        <CssBaseline />
        <div >
          <div className={'main-container'} >
          <AppBar position="absolute" color="default" className={`appbarr ${classes.appBar}`}>
          <Toolbar align="center" className={'headertb'}>
            <Typography variant="h6" color="inherit" noWrap align="center">
              Bedaya Caravan sheet 2019
            </Typography>
            <TextField
              id={'iptv'}
              style={{width: '30%'}}
              label={"Enter IP address"}
              fullWidth
              onChange={(event) => setIP(event.target.value)}
            />
          </Toolbar>
        </AppBar>
            
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <React.Fragment>
              {/* table will be here */}
              <MaterialTable
                title="All patients"
                columns={state.columns}
                data={state.data}
                actions={[
                  {
                    icon: 'edit',
                    tooltip: 'Edit Patient',
                    onClick: (event, rowData) => this.edit(rowData)
                  },
                  {
                    icon: 'delete',
                    tooltip: 'Delete Patient',
                    onClick: (event, rowData) => alert("You want to delete " + rowData.name)
                  }
                ]}
              />
            </React.Fragment>
          </Paper>
        </main>
        <Box
        position="fixed"
        bottom={24}
        right={24}
        zIndex="tooltip"
      >
        <Fab color="secondary"  onClick={()=>this.props.history.push('/addnew')} >
          <AddIcon />
        </Fab>
      </Box>
          </div>
          
        </div>
      </React.Fragment>
    );
  }
}


const mapStateToProps = state => {
    return {
      ...state
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        getData: (path, onSuccessful, onError) =>
            dispatch(getData(path, onSuccessful, onError))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(HomePage))
