import {checkupData} from 'forms/checkupForm'
import {CHANGE_VALUE_IN_CHECKUP, LOAD_DATA} from './actionTypes'

// const initialState = {
//   checkup: {...checkupData.initialValues, patientID: 'default'}
// };

const reduce = (state = {}, action = {}) => {
  switch (action.type) {
    case(CHANGE_VALUE_IN_CHECKUP):
    // console.log("AAAAAAAAAAAAAAAAA: ", action.field)
    console.log("AAAAAAAAAAAAAAAAA: ", state)

    return {
      ...state,
      [action.field.name]: action.field.value
    }
    case(LOAD_DATA):
    // console.log("DATA FROM REDUCER: ", action.data)
      return {
        ...state,
        ...action.data
      }

    default:
      return state;
  }
}

export default reduce