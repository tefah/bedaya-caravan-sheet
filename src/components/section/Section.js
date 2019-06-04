import React, {Component} from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import './section.css';
import Radiobtn from '../formComponents/radiobtn/radiobtn';
import CheckBox from '../formComponents/checkbox/checkbox';
import Checklist from '../formComponents/checklist/checklist';
import Selectlist from '../formComponents/selectlist/selectlist';

class Section extends Component {

  render(){
    return (
    <div className="container">
      <Typography className="section-label" variant="h6" gutterBottom>
        {this.props.label}
      </Typography>
      <Grid container spacing={24}>
        {this.props.fields.map(field => {
          switch(field.component){
            case("input"):
              return ( 
                <Grid className="field-item" item xs={12} >
                  <TextField
                    required
                    id={field.name}
                    name={field.name}
                    label={field.placeholder}
                    fullWidth
                    autoComplete={field.name}
                    onChange={(value) => this.props.setValue(field.name, value)}
                  />
                </Grid>
              );
            case("radio"):
              return (
                <Grid className="field-item" item xs={12} >
                  <Radiobtn f={field} setValue={this.props.setValue} />  
                </Grid>
              );
              case("checkbox"):
                return(
                  <Grid className="field-item" item xs={12} >
                    <CheckBox  f={field} setValue={this.props.setValue} />
                  </Grid>
                );
              case("selectlist"):
                return (
                  <Grid className="field-item" item xs={12} >
                    <Selectlist f={field} setValue={this.props.setValue} />
                  </Grid>
                );
              case("checklist"):
              return (
                <Grid className="field-item" item xs={12} >
                  <Checklist f={field} setValue={this.props.setValue} />
                </Grid>
              );
              default: 
              return (<h1>ERROR not a valid component</h1>);
          }
        }
        )
        }
      </Grid>
    </div>
      )
  }
}

export default Section;
