import './RepoCard.css'


function RepoCard({ name, url, date }) {
    return (
        <div className="repocard-container">
            <h2>{name}</h2>
            <h5>Last updated: <p>{date}</p></h5>
            <p className="repo-link-button"><a target="_blank" href={`${url}`}>Repository</a></p>
        </div>
    );
}

export default RepoCard;