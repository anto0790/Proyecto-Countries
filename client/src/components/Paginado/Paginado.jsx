import React from "react";
import './Paginado.css';


const Paginado = ({forPage, allCountries, paginado}) => {
    const pageNumbers = [];

    for (let i = 0; i < Math.ceil(allCountries / forPage); i++) {
        pageNumbers.push(i+1);
    }

    return (
        <nav>
            <ul>
                {
                    pageNumbers &&
                    pageNumbers.map(number => (
                        <li key={number}>
                            <a onClick={()=>paginado(number)}>{number}</a>
                        </li>
                    ))
                }
            </ul>
        </nav>

    )
}

export default Paginado;