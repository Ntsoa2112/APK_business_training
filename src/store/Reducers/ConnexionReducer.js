const initialState = { user:{ logging:false }}

function ConnexionReducer(state = initialState, action) {
  let nextState
  switch (action.type) {
    case 'CHANGE_CONNEXION':
        if(state != action.value){
          nextState = action.value
        }
      return nextState || state
  default:
    return state
  }
}

export default ConnexionReducer