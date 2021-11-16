import './ProfileCard.css'
import ProfileIcon from './ProfileIcon'
import { Link } from 'react-router-dom'


function ProfileCard({ avatar, username, name, repos, following, followers }) {

    return (
        <div className="profilecard-main-container">
            <ProfileIcon 
            avatar={avatar}
            />
            <div className="profilecard-names-container">
            <h1>{username}</h1>
            <p>{name}</p>
            </div>
            <div className="profilecard-numbers-container">
            <p ><Link className="numbers-link" to={`/repos/${repos}/${username}`}>Repositories: {repos}</Link></p>
            <p ><Link className="numbers-link" to={`/followers/${followers}/${username}`}>Followers: {followers}</Link>
            </p>
            <p>Following: {following}</p>
            </div>
        </div>
    );
}

export default ProfileCard;