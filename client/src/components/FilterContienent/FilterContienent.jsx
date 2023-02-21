import { useDispatch } from "react-redux";
import { filterContinent } from "../../redux/actions";


const FilterContienent = () => {
    const dispatch = useDispatch();

    function handlerFilterContinent(event) {
        dispatch(filterContinent(event.target.value));
    }

    return (
        <div>
            <select onChange={(event) => handlerFilterContinent(event)}>

                <option value='Americas'>
                    America
                </option>
                <option value='Europe'>
                    Europa
                </option>
                <option value='Antarctic'>
                    Antartida
                </option>
                <option value='Asia'>
                    Asia
                </option>
                <option value='Africa'>
                    Afirca
                </option>
                <option value='Oceania'>
                    Oceania
                </option>
                <option value='All'>
                    All
                </option>
            </select>

        </div>
    )
}

export default FilterContienent;