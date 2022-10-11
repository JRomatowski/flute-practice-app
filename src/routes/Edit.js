import { useNavigate } from 'react-router-dom'
import '../App.css';




function Edit() {

    const navigate = useNavigate();

    const historyClick = function() {
        navigate('/History')
    }

    return(
        <>  
            <div>
                Edit component
            </div>
            <button onClick={historyClick}>History</button>
        </>
    )
}

export default Edit