import './ProfileIcon.css'

function ProfileIcon({ avatar }) {
    return (
        <div>
            <img className="profile-icon" src={avatar} alt="user-icon"/>
        </div>
    );
}

export default ProfileIcon
