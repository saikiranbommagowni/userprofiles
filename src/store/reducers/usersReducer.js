import * as actionTypes from 'store/actions';
const initialState = {
    users: []
}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
       
        case actionTypes.STORE_USERS:
            return {
                ...state,
                users: state.users.concat(action.usersData)
            }
        case actionTypes.MODIFY_USER:
            const newState = JSON.parse(JSON.stringify(state));
            const selectedUser = newState.users.findIndex(user=>user.id===action.userData.id);
            newState.users[selectedUser] = {...newState.users[selectedUser],
                ...action.userData
            }
            return {
                ...state,
                users: newState.users
            }
        case actionTypes.NEW_USER:
            if(action.userData){
                action.userData['id'] =  Math.floor(Math.random() * 10000);
            }           
            return {
                ...state,
                users:[...state.users,action.userData ]
            }
        default:
            return state;
    }
};

export default usersReducer;