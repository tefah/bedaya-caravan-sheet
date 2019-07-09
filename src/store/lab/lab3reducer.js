import {CHANGE_VALUE_LAB3, LOAD_DATA_LAB3} from '../actionTypes'

const reducer = (state = {}, action = {}) => {
  switch (action.type) {
    case(CHANGE_VALUE_LAB3):
    return {
      ...state,
      [action.field.name]: action.field.value
    }
    case(LOAD_DATA_LAB3):
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