export function userReducer(state = null , action) {
                        // once we get one of the bellow the
                        // state will update with that payload.
    switch(action.type) {
        
        case "LOGGED_IN_USER":   // User is logged (named like this)
        return action.payload;   // getting the states of the logged user
                                 // like username, password etc..

        case "LOGOUT":
            return action.payload;

            default: //we need to have a default state which is (state=null)
                return state;
         
    }
}

