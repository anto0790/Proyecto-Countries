import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { filterActivities } from "../../redux/actions";
import { getActivities } from "../../redux/actions";


const FilterTravel = () =>{
    const dispatch= useDispatch();

    useEffect(() => {
        dispatch(getActivities());
    }, [dispatch]);

    const allActivities= useSelector(state=> state.activities);

    function handlerFilterActivitie(event){
        dispatch(filterActivities(event.target.value));
    }

    return(
        <div>
            <select onChange={(event) => handlerFilterActivitie(event)} >
                {allActivities.map(elem=>(
                    <option value={elem.name}>
                        {elem.name}
                    </option>
               
                ))}
            </select>
          
        </div>
    )
}

export default FilterTravel;