import React, { Component } from 'react'
import Select from 'react-select'

class CustomSelect extends React.Component {
  render() {
    const {
      input: { value, onChange },
      options
    } = this.props
    return (
      <Select
        value={value}
        onChange={onChange}
        options={options}
      />
    )
  }
}

export default CustomSelect