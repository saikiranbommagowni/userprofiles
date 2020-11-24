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
            debugger;
            // const newState = Object.assign({}, state);
            const newState = JSON.parse(JSON.stringify(state));
            const selectedUser = newState.users.findIndex(user=>user.id===action.userData.id);
            newState.users[selectedUser] = {...newState.users[selectedUser],
                ...action.userData
            }
            // Object.entries(action.userData).map(obj=>{debugger;return newState.users[selectedUser][obj[0]] = action.userData[obj[0][1]]})
            return {
                ...state,
                users: newState.users
            }
        case actionTypes.NEW_USER:
            debugger;
            // const newState = Object.assign({}, state);
            if(action.userData){
                action.userData['id'] =  Math.floor(Math.random() * 10000);
            }
            const copyState = JSON.parse(JSON.stringify(state));
            
            copyState.users.push(action.userData);
           
            // Object.entries(action.userData).map(obj=>{debugger;return newState.users[selectedUser][obj[0]] = action.userData[obj[0][1]]})
            return {
                ...state,
                users:copyState.users
            }
        default:
            return state;
    }
};

export default usersReducer;