import { useState, useEffect } from "react";
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import { getCountries } from "../../redux/actions";


const Form = () => {

    const dispatch= useDispatch();
    const countries= useSelector(state=>state.countries);

    useEffect(()=>{
        dispatch(getCountries());
    },[dispatch]);

    const [form, setForm] = useState({
        arrayCountries:[],
        name: '',
        dificult: '',
        duration: '',
        season: '',
    })

    const [errors, setErrors] = useState({
        name: '',
        dificult: '',
        duration: '',
        season: '',
    })

    function changeHandler(event) {
        const property = event.target.name;
        const value = event.target.value;

        validate({ ...form, [property]: value });
        setForm({ ...form, [property]: value });
    }

    function validate(form) {

        if (form.name) {
            if (/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(form.name)) {
                setErrors({ ...errors, name: '' });
            }
            else {
                setErrors({ ...errors, name: 'Error en nombre.' });
            }

            if (form.name === ' ') {
                setErrors({ ...errors, name:'Vacío'});
            }
        }

        if (form.dificult) {
            if (/^[0-9]*$/.test(form.dificult)) {
                setErrors({ ...errors, dificult: '' });
            }
            else {
                setErrors({ ...errors, dificult: 'Error en dificultad.' });
            }

            if (form.dificult === ' ') {
                setErrors({ ...errors, dificult:'Vacío'});
            }
        }

        if (form.duration) {
            if (/^[0-9]*$/.test(form.duration)) {
                setErrors({ ...errors, duration: '' });
            }
            else {
                setErrors({ ...errors, duration: 'Error en duración.' });
            }

            if (form.duration === ' ') {
                setErrors({ ...errors, duration:'Vacío'});
            }
        }

        if (form.season) {
            if (/^[A-Za-z]*$/.test(form.season)) {
                setErrors({ ...errors, season: '' });
            }
            else {
                setErrors({ ...errors, season: 'Error en temporada.' });
            }

            if (form.season === ' ') {
                setErrors({ ...errors, season:'Vacío'});
            }
        }

    }

    function changeHandlerSelect(event){
        setForm({
            ...form, arrayCountries:[...form.arrayCountries, event.target.value]
        })
    }

    function submitHandler(event){
        event.preventDefault();
        axios.post("http://localhost:3001/activities",form)
        .then(res=>alert(res));
    }


    return (
        <form onSubmit={submitHandler}>
            <div>
                <label>Name: </label>
                <input type="text" value={form.name} onChange={changeHandler} name='name' />
                <span> {errors.name} </span>
            </div>
            <div>
                <label>Dificult: </label>
                <input type="text" value={form.dificult} onChange={changeHandler} name='dificult' />
                <span> {errors.dificult} </span>
            </div>
            <div>
                <label>Duration: </label>
                <input type="text" value={form.duration} onChange={changeHandler} name='duration' />
                <span> {errors.duration} </span>
            </div>
            <div>
                <label>Season: </label>
                <input type="text" value={form.season} onChange={changeHandler} name='season' />
                <span> {errors.season} </span>
            </div>

            <select onChange={changeHandlerSelect}>
                {countries.map(elem=>(
                    <option value={elem.id}>
                        {elem.name}
                    </option>
                ))}
                
            </select>
            <ul>
                <li>{form.arrayCountries.map(item=>item,' , ')}</li>
            </ul>

            <button type="submit">Enviar</button>
        </form>
    )
}

export default Form;