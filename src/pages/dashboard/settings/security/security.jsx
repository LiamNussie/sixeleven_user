import './security.scss';

const Security = () => {
    return (
        <div className="security">
            <div className="profile">
                <p className="titlep">Change Password</p>
                
                <form>
                    <div className="input">
                        <label>Current Password</label><br />
                        <input type="text" />
                    </div>
                    <div className="input">
                        <label>New Password</label><br />
                        <input type="text" />
                    </div>
                    <div className="input">
                        <label>Re-enter New Password</label><br />
                        <input type="text" />
                    </div>
                    <div className="btns">
                        <button className='cancel'>CANCEL</button>
                        <button type='submit'>UPDATE CHANGES</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Security;