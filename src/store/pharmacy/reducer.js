import {CHANGE_VALUE_PHARMACY, LOAD_DATA_PHARMACY} from '../actionTypes'

// const initialState = {
//   checkup: {...checkupData.initialValues, patientID: 'default'}
// };

const reducer = (state = {}, action = {}) => {
  switch (action.type) {
    case(CHANGE_VALUE_PHARMACY):
    // console.log("AAAAAAAAAAAAAAAAA: ", action.field)
    console.log("AAAAAAAAAAAAAAAAA: ", state)

    return {
      ...state,
      [action.field.name]: action.field.value
    }
    case(LOAD_DATA_PHARMACY):
    // console.log("DATA FROM REDUCER: ", action.data)
      return {
        ...state,
        ...action.data
      }

    default:
      return state;
  }
}

export default reducer