import {createStore,applyMiddleware} from "redux";
//Thunk es un middelware que nos permite realizar aciones asincrónicas(en este caso las de actions.js).
import thunk from "redux-thunk";
import rootReducer from "./reducer";
//applyMiddelware tiene su propia librería definida.
import {composeWithDevTools} from "redux-devtools-extension";

//Cuando esta tachado significa que esta deprecado, y recomiendan usar la última actualización..
//.. pero eso no significa que no siga funcionando.
const store= createStore(rootReducer,
    //Una forma es con el COMPOSE (hay que importarlo en la prrimer línea desde redux)..
    /*
    compose(
        //..que lo que hace es aplicar el middelware de thunk a la store..
        applyMiddleware(thunk),
        //..y pasarle esta configuración para que en el navegador nos aparezcan las devTools.
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )*/
    //También se puede hacer así (que iría como segundo parámetro de createStore)..
    //..que con el composeWithDevTools ya nos da las devToos para el navegador..
    
    //..y le pasamos el applyMiddelware con el thunk.
    composeWithDevTools(
        applyMiddleware(thunk),
    )
    
)

//DATO: Redux-thunk te permite escribir creadores de acciones que retornan una función en vez de un objeto de acción típico..
//..Entonces, el thunk puede ser usado para retrasar el envío de una acción hasta que se cumpla una línea de código asíncrona.

//Si no funciona instalar en la rama client: (ver que..)
//npm i redux redux-devtools-extension redux-thunk thunk react-router-dom react-redux axios


export default store;