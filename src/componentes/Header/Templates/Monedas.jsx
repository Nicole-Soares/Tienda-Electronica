import React, { useContext } from "react";
import { AppContext } from "../../AppContext/AppContext";



export default function Monedas () {

    const {loggedIn}  = useContext(AppContext);



    if(loggedIn) {
        return (
            <div>tus monedas disponibles:</div>)
    }
    else{ return("tenes que ingresar para ver tus monedas disponibles")
        
    }
   
}