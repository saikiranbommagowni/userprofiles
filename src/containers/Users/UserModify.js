
import { useParams } from "react-router-dom";
import * as actionTypes from 'store/actions';
import { connect } from 'react-redux';
import { useState } from "react";
import UserForm from "components/Users/UserForm";


const UserModify = (props) => {
    const uid = useParams().userId;
    const [user,setUser] = useState({});

    const allUsers = Object.assign([], props.usersData);
    const selUser = allUsers.find(res=>res.id===parseInt(uid))
    if(selUser && user.id !== selUser.id){
        setUser(selUser);
    }
    
return <UserForm user={user} onUserModify={props.onModifyUser}/>


}

const mapStateToProps = state => {
    return {
        usersData: state.usersReducer.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onModifyUser:(data)=>dispatch({type:actionTypes.MODIFY_USER, userData:data})
    }

}
// export default UserModify;
export default connect(mapStateToProps, mapDispatchToProps)(UserModify);
