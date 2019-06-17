import {sociodemographic} from 'forms/checkupForm'
import {CHANGE_VALUE} from './actionTypes'

const initialState = {
  checkup: {...sociodemographic.initialValues}
};

const reduce = (state = initialState, action = {}) => {
  switch (action.type) {
    case(CHANGE_VALUE):
    // console.log("AAAAAAAAAAAAAAAAA: ", state.checkup)
    return {
      checkup: {
        ...state.checkup,
        [action.field.name]: action.field.value
      }
    };
    default:
      return state;
  }
}

export default reduce