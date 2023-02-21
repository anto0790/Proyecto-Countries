import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountriesName } from "../../redux/actions";


const SearchBar = () => {
    const dispatch= useDispatch();
    const [search,setSearch]= useState('');

    function handlerInput(event){
        let name=event.target.value;
        let elem='';

        for(let i=0; i<name.length; i++){
            if(i===0){
                elem+=name.charAt(i).toUpperCase();
            }
            else{
                elem+=name.charAt(i);
            }
        }

        setSearch(elem);
    }

    function handlerClick(event){
        event.preventDefault();
        dispatch(getCountriesName(search));
        setSearch('');
    }
   
    return(
        <div>
            <label>Search: </label>
            <input type="text" onChange={handlerInput} value={search} />
            <button type="submit" onClick={handlerClick}>submit</button>
        </div>
    )
}

export default SearchBar;