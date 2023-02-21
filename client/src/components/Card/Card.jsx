import './Card.css';


const Card = (props) => {
    return (
        <div id='card' >
            <h3>{props.name}</h3>
            <img src={props.image} alt="img" id='image' />
            <h3>{props.continent}</h3>
        </div>
    )
}

export default Card;