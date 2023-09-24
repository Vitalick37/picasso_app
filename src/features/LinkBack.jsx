import { useNavigate } from "react-router-dom";

const LinkBack = () => {

    const navigate = useNavigate()

    const handleGoBack = (e) => {
        navigate(-1)
    }

    return (
        <button
            onClick={handleGoBack}
            className="Button"
        >
            <div>Go back</div>
        </button>
    )
}


export default LinkBack;