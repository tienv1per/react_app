import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        return navigate('/');
    }   

    return (
        <div>
            <h1 style={{margin: '20px'}}>NOT FOUND BRO</h1>
            <button 
                className="button-pro"
                onClick={handleClick}
            >
                Back To HomePage
            </button>
        </div>
    )
}

export default NotFound;