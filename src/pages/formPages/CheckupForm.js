import React from 'react'
import { Field, reduxForm } from 'redux-form'

import {changeValue} from 'store/checkup/actions'
import {checkupData} from 'forms/checkupForm'
import {submitData, getSingleData} from 'store/main/actions'
import { COMPONENTS } from 'forms/helpers/FormUtils';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { RadioButton } from 'material-ui/RadioButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Radiobtn from 'components/formComponents/radiobtn/radiobtn';
import Checklist from 'components/formComponents/checklist/checklist';
import Selectlist from 'components/formComponents/selectlist/selectlist';
import Checkbox from 'components/formComponents/checkbox/checkbox';
import Textfield from 'components/formComponents/Textfield/Textfield';
import { renderTextField, renderRadioGroup } from 'components/formComponents/formComponents';


let CheckupForm = props => {
  const { handleSubmit } = props
  return (
    <MuiThemeProvider>
      <form onSubmit={handleSubmit}>
        {/* form body*/}
        {checkupData.fields.map(field => {
            switch(field.component){
              case(COMPONENTS.input):
                return ( 
                  <Grid className="field-item" item xs={12} >
                    <Field
                      name={field.name}
                      component={renderTextField}
                      label={field.placeholder}
                    />
                  </Grid>  
                );
              case(COMPONENTS.radio):
                return (
                  <Grid className="field-item" item xs={12} >
                      <Field name={field.name} component={renderRadioGroup}>
                      {field.options.map(option => (
                        <RadioButton
                        style={{display: 'inline-block', width: 'auto'}}
                        value={option}  label={option} />
                        )
                      )}
                      </Field>
                  </Grid>
                );
              case(COMPONENTS.checkbox):
                return(
                  <Grid className="field-item" item xs={12} >
                    <Field name={field.name} type={COMPONENTS.checkbox} component={Checkbox} f={field}  />
                  </Grid>
                );
              case(COMPONENTS.selectlist):
                return (
                  <Grid className="field-item" item xs={12} >
                    <Field name={field.name} type={COMPONENTS.selectlist} component={Selectlist} f={field}  />                  
                  </Grid>
                );
              case(COMPONENTS.checklist):
                return (
                  <Grid className="field-item" item xs={12} >
                    <Field name={field.name} type={COMPONENTS.checklist} component={Checklist} f={field}  />
                  </Grid>
              );
              case(COMPONENTS.label):
                return (
                  <Typography className="section-label" variant="h6" gutterBottom>
                    {field.placeholder}
                  </Typography>
              );
              default: 
                return (<h1>ERROR not a valid component</h1>);
            }
          })
        }
        <div >
        
          <Button
            type='submit'
            variant="contained"
            color="primary"
          >
            NEXT
            {/* {activeStep === steps.length - 1 ? 'show Data' : 'Next'} */}
          </Button>
        </div>
      </form>
    </MuiThemeProvider>
  )  
}

CheckupForm = reduxForm({
  // a unique name for the form
  form: 'checkup'
})(CheckupForm)

export default CheckupForm