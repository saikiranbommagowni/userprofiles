// import { connect } from 'react-redux';

import UsersList from 'components/Users/UsersList';

// import * as actionTypes from 'store/actions';

const Users = (props) => {

    

    return <UsersList users={props.usersData}/>
}

// const mapStateToProps = state => {
//     return {
//         userData: state.userReducer.users
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         onStoreUsers:(data)=>dispatch({type:actionTypes.STORE_USERS, userData:data})
//     }

// }

// export default connect(mapStateToProps, mapDispatchToProps)(Users);

export default Users;