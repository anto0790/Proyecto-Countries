import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from "react";
import { getCountryId } from "../../redux/actions";
import { Link } from "react-router-dom";


const Detail = (props) =>{

    const dispatch= useDispatch();

    useEffect(() =>{
        dispatch(getCountryId(props.match.params.id))
    },[dispatch]);

    const myDetail= useSelector(state=> state.detail);

    return(
        <div>
            {
                myDetail !== null ?
                <div>
                    <h1>{myDetail.name}</h1>
                    <img src={myDetail.image} alt="bandera" />
                    <h2>{console.log( myDetail.travels)}</h2>
                </div>
                : <p>Loading...</p>
            }

            <Link to='/home'>Volver</Link>
        </div>
    )
}

export default Detail;

//props.match.params.id => de esta forma se accede al id del detalle.