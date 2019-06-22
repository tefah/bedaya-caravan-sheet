const required = value => (value || typeof value === 'number' ? undefined : 'Required')
const alphaNumeric = value =>(
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Only alphanumeric characters'
    : undefined
)
const phoneNumber = value =>(
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? 'Invalid phone number, must be 10 digits'
    : undefined
)

export default {required, alphaNumeric, phoneNumber}