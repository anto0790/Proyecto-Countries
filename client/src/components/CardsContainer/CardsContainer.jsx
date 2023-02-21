import Card from "../Card/Card";
import './CardsContainer.css';
import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import { getCountries } from "../../redux/actions";
import { Link } from "react-router-dom";


const CardsContainer = ({currentCountries}) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCountries());
    }, [dispatch]);

    return (
        <div id='containerCards'>
            {currentCountries.map(country => {
                return (
                    <Link key={country.id} to={`/detail/${country.id}`}>
                        <Card
                            id={country.id}
                            name={country.name}
                            image={country.image}
                            continent={country.continent}
                            capital={country.capital}
                        />
                    </Link>
                )
            })}
        </div>
    )
}

export default CardsContainer;