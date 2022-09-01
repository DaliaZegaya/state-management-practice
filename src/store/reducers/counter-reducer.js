import {ACTION_UP,ACTION_DOWN,ACTION_ZERO, USER_INPUT} from "../actions/counter-types"


export  function counterReducer(state, action){
    switch (action.type) {
      case ACTION_UP:
        return state+1
        
        case ACTION_DOWN: 
        return state-1
  
        case ACTION_ZERO:
          return action.payload

        case USER_INPUT:
            return action.payload
    
      default:
        return state;
    }
  }
  