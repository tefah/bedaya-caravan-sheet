import React from 'react';
import TextField from 'material-ui/TextField';
import { RadioButtonGroup } from 'material-ui/RadioButton';
import Checkbox from 'material-ui/Checkbox';
import { Select, FormHelperText, FormControl } from '@material-ui/core';
import { AutoComplete } from 'material-ui';


export const renderTextField = (
  { input, label, type, meta: { touched, error }, ...custom },
) => (
  <TextField
    type={type}
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    fullWidth
    {...input}
    {...custom}
  />
);

export const renderCheckbox = ({ input, label }) => (
  <Checkbox
    style= {{width:AutoComplete,}}
    label={label}
    checked={input.value ? true : false}
    onCheck={input.onChange}
  />
);

export const renderRadioGroup = ({ input,meta: { touched, error, warning }, ...rest }) => (
  <div>
  <RadioButtonGroup
    style={{display: 'flex', flexWrap: 'wrap', }}
    {...input}
    {...rest}
    valueSelected={input.value}
    onChange={(event, value) => input.onChange(value)}
  />
  {touched &&((error && <span style={{color: 'red'}}>{error}</span>) ||
        (warning && <span>{warning}</span>))}
  </div>
  
);

export const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>
  }
}

export const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => (
  <FormControl error={touched && error}>
    <label>{label}</label>
    <Select
      native
      {...input}
      {...custom}
    >
      {children}
    </Select>
    {renderFromHelper({ touched, error })}
  </FormControl>
)

// export const renderSelectField = (
//   { input, label, meta: { touched, error }, children, ...custom },
// ) => (
//   <SelectField
//     floatingLabelText={label}
//     errorText={touched && error}
//     {...input}
//     onChange={(event, index, value) => input.onChange(value)}
//     children={children}
//     {...custom}
//   />
// );