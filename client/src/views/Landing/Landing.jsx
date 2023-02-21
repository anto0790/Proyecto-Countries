import { Link } from "react-router-dom";
import './Landing.css';;


const Landing = () =>{
    return(
        <div>
            <h1>Landing</h1>
            <Link to='/home' className='intro' >Intro</Link>
        </div>
    )
}

export default Landing;