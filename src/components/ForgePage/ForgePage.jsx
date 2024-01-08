import { Link } from 'react-router-dom'
export default function ForgePage () {
    return (
        <div>
            <h2>Choose a Quest to Forge:</h2>
            <div>
            <Link to='/forgequiz'>Quiz</Link>
            &nbsp;&nbsp;
            <Link to='/forgecards'>Flash Cards</Link>
            </div>
        </div>
    )
}