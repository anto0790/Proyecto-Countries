import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { filterPopulation } from "../../redux/actions";
import { getPopulation } from "../../redux/actions";


const FilterPopulation = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPopulation())
    }, [dispatch])

    let allPopulation = useSelector(state => state.population);
    allPopulation.push('All');
    allPopulation=[...new Set(allPopulation)];

    function handlerFilterPopulation(event) {
        dispatch(filterPopulation(event.target.value));
    }

    return (
        <div>
            <select onChange={(event) => handlerFilterPopulation(event)} >
                {
                    allPopulation.map(elem=>(
                        <option value={elem}>{elem}</option>
                    ))
                }
            </select>
        </div>
    )

}

export default FilterPopulation;
