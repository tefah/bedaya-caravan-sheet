import {CHANGE_VALUE_LAB1, LOAD_DATA_LAB1} from '../actionTypes'

const reducer = (state = {}, action = {}) => {
  switch (action.type) {
    case(CHANGE_VALUE_LAB1):
    return {
      ...state,
      [action.field.name]: action.field.value
    }
    case(LOAD_DATA_LAB1):
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