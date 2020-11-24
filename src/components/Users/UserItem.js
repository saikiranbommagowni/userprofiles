import { Link } from "react-router-dom";
// import Card from "shared/components/UIElements/Card";
import bs from 'assets/globalStyles/bootstrap.module.css';
import styles from "components/Users/UserItem.module.css";
import cx from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faAddressBook } from '@fortawesome/free-regular-svg-icons';
import { faPhone, faGlobe } from '@fortawesome/free-solid-svg-icons';

const UserItem = (props) => {
debugger;
    const prepareAddress = (address)=>{
    return address.suite + ", " + address.street + ", " + address.city;
    }
    return <div className={cx(styles.cardItem, bs['col-12'], bs['col-sm-6'])}>

        <div className={cx(styles.cardLeft, bs['col-12'], bs['col-sm-4'])}>
            <Link to={`/${props.user.id}/modify`}>
                <div className={styles.profilePicDiv}>
                    <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt={props.user.name} className={styles.profilePic}></img>
                </div>
            </Link>
        </div>

        <div className={cx(styles.cardRight, bs['col-12'], bs['col-sm-8'])}>
            <Link to={`/${props.user.id}/modify`}>
                <div>
                    <h3 className={styles.cardInfoName}>{props.user.name}</h3>
                    <p className={cx(styles.cardInfoText)}><FontAwesomeIcon icon={faEnvelope} /> {props.user.email}</p>
                    <p className={cx(styles.cardInfoText)}><FontAwesomeIcon icon={faAddressBook} /> {prepareAddress(props.user.address)}</p>
                    <p className={cx(styles.cardInfoText)}><FontAwesomeIcon icon={faPhone} /> {props.user.phone}</p>
                    <p className={cx(styles.cardInfoText)}><FontAwesomeIcon icon={faGlobe} /> {props.user.website}</p>
                </div>
                <div>
                    <div className={cx(styles.cardCompLogo)}>
                        <img src="https://www.mediumblue.com/wp-content/uploads/2018/12/dry-ice-blasting-logo-256.png" alt={props.user.company.name} className={styles.companyLogo}></img>
                    </div>
                    <div className={cx(styles.cardCompDetails)}>
                        <p className={cx(styles.cardInfoCompName)}><b>{props.user.company.name}</b></p>
                        <p className={cx(styles.cardInfoCompTag)}><i>{props.user.company.catchPhrase}</i></p>

                    </div>
                </div>
            </Link>
        </div>

    </div>
};
export default UserItem;
