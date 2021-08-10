import React, { useContext, useEffect } from "react"
import { AppContext } from "../AppContext/AppContext";
import "./Listado.css"

let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTExOGYxM2Q5ZmMzODAwMjFmNjM4NDUiLCJpYXQiOjE2Mjg1NDA2OTJ9.PA0rEWI4gDP8xHFtuty2J7uJW1yCTVcnDqWyDw8UVZQ';
let options = {header: {'Authorization': `Bearer ${token}`}}

export default function Listado () {

    const {productos, setProductos} = useContext(AppContext);

   async function obtenerProductos (){
    try{
       let peticion = await fetch('https://coding-challenge-api.aerolab.co/products', options);
       let res = await peticion.json();
       setProductos(res);
    }
    catch(error) {
        console.log(error)
    }
    
   } 

   useEffect (() => {
       obtenerProductos();
   },[]);

   }

    return(
         <div>
            { productos.length > 0 ? productos.map((item) =>{
                return(
                    item.
                )
            })}
         </div>
    )
}