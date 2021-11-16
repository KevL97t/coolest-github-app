import { Link } from 'react-router-dom';
import './MiniProfileCard.css'

function MiniProfileCard({ avatar, username, repos }) {

    return (
        <div className="mini-card-main-container">
            <img className="mini-card__icon" src={avatar} alt="user_icon" />
            <h3 className="mini-card__username">{username}</h3>
            <Link target="_blank" className="mini-card__repos" to={`/repos/${repos}/${username}`}>Repositories</Link>
        </div>
    );
}

export default MiniProfileCard;