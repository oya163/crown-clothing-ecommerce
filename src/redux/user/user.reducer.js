// This represents last state or current this.state.
// {
// action type
//   type:
//   // object to set value or for any manipulation
//   payload:
// }

// Just initialize the user state
const INITIAL_STATE = {
  currentUser: null
}

const userReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.payload
      }
    default:
    return state;
  }
}

  export default userReducer;
