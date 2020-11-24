
// import { useParams } from "react-router-dom";
import * as actionTypes from 'store/actions';
import { connect } from 'react-redux';
// import { useState } from "react";
import UserForm from "components/Users/UserForm";


const NewUser = (props) => {
    
    
return <UserForm onNewUser={props.onNewUser}/>


}

const mapStateToProps = state => {
    return {
        usersData: state.usersReducer.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onNewUser:(data)=>dispatch({type:actionTypes.NEW_USER, userData:data})
    }

}
// export default UserModify;
export default connect(mapStateToProps, mapDispatchToProps)(NewUser);
