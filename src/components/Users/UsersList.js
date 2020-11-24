import bs from 'assets/globalStyles/bootstrap.module.css';
import styles from 'components/Users/UsersList.module.css';
import cx from 'classnames';
import UserItem from 'components/Users/UserItem';

const UsersList = (props) => {
    return <div className={cx(styles.listContainer, bs['container-fluid'])} >
        <div className={bs['row']}>
            
                {props.users.map(user => <UserItem key={user.id} user={user} />)}
        </div>
    </div>
}

export default UsersList;