import './settings.scss';
import { useState } from 'react';
import Workspace from './workspace/workspace';
import Profile from './profile/profile';
import Notifs from './notifs/notifs';
import Security from './security/security';
import Invite from './invite/invite';

const Settings = () => {
    const [page, setPage] = useState("Profile")
    return (
        <div className="settings">
            <p className="title">Account Settings</p>
            <ul className="navs">
                {/* <li className={page === "Workspace" ? "active" : null} onClick={() => setPage("Workspace")}>Workspace</li> */}
                <li className={page === "Profile" ? "active" : null} onClick={() => setPage("Profile")}>Profile</li>
                <li className={page === "Notifications" ? "active" : null} onClick={() => setPage("Notifications")}>Notifications</li>
                <li className={page === "Security" ? "active" : null} onClick={() => setPage("Security")}>Security</li>
                {/* <li className={page === "Invite" ? "active" : null} onClick={() => setPage("Invite")}>Invite Members</li> */}
            </ul>

            {/* {page === "Workspace" && <Workspace />} */}
            {page === "Profile" && <Profile />}
            {page === "Notifications" && <Notifs />}
            {page === "Security" && <Security />}
            {/* {page === "Invite" && <Invite />} */}
        </div>
    )
}

export default Settings;