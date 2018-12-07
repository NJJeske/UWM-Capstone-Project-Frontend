import React from 'react';
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { logoutReturnURL } from '../../redux/config';
import './styles.scss';

export const ProfileButton = props => (
    <div id='profile-dropdown'>
        <UncontrolledDropdown direction='left'>
            <DropdownToggle className='toggle'>
                <FontAwesomeIcon icon='user-cog'/>
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem onClick={() => props.history.push('/profile')}>
                    Settings
                </DropdownItem>
                <DropdownItem onClick={() => {
                    console.log(props);
                    // Clear session data that we set
                    props.auth.logout();
                    // Clear session thru Auth0 as well
                    window.location = `https://uwm-capstone.auth0.com/v2/logout?returnTo=${encodeURIComponent(logoutReturnURL)}`;
                }}>Logout</DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>
    </div>
);

export default withRouter(ProfileButton);
