const reducer = (state = {}, action = {}) => {
  console.log('<<<>>>><<>>>>>: ', state)
  switch (action.type) {
    case('reset'):
    const keys = Object.keys(state)
    keys.forEach(key => {
      delete state.key
    })
    // state = {}
    return state
    default:
      return state;
  }
}

export default reducer