import {CHANGE_VALUE_FOLLOWUP, LOAD_DATA_FOLLOWUP} from '../actionTypes'

const reducer = (state = {}, action = {}) => {
  switch (action.type) {
    case(CHANGE_VALUE_FOLLOWUP):
    return {
      ...state,
      [action.field.name]: action.field.value
    }
    case(LOAD_DATA_FOLLOWUP):
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