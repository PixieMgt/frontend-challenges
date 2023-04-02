import { Link, useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    const handleHomeClicked = () => {
        navigate("/");
    }

    return (
        <div className="page-not-found">
            <h1>404</h1>
            <h2>Page not found</h2>
            <button className="page-not-found__home" onClick={handleHomeClicked}>take me home</button>
        </div>
    );
}

export default NotFound;