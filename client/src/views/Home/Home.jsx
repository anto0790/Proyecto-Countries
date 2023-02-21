import { useState } from "react";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useSelector } from 'react-redux';
import Paginado from '../../components/Paginado/Paginado';
import FilterContienent from '../../components/FilterContienent/FilterContienent';
import FilterTravel from '../../components/FilterTravel/FilterTravel';
import FilterPopulation from '../../components/FilterPopulation/FilterPopulation';
import SearchBar from "../../components/SearchBar/SearchBar";


const Home = () => {

    const allCountries = useSelector(state => state.countries);

    const [currentPage, setCurrentPage] = useState(1);
    const [forPage, setForPage] = useState(10);
    const indexLastCountry = currentPage * forPage;
    const indexFirstCountry = indexLastCountry - forPage;
    const currentCountries = allCountries.slice(indexFirstCountry, indexLastCountry);

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    return (
        <div>
            <FilterContienent />
            <FilterTravel />
            <FilterPopulation />
            <SearchBar />

            <Paginado
                forPage={forPage}
                allCountries={allCountries.length}
                paginado={paginado}
            />

            <CardsContainer currentCountries={currentCountries} />
        </div>

    )
}

export default Home;

//silice=> toma un array y corta una porcion segun lo que se pasa por parámetro. retorna un array.