import './Error.css'

function Error() {
    return (
        <div className="error-container">
            <h3 className="title">Whoops! an error occurred!</h3>
            <p className="text">We couldn't find the user you were looking for</p>
        </div>
    );
}

export default Error;