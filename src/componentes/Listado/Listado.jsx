import React, { useContext, useEffect } from "react"
import { AppContext } from "../AppContext/AppContext";
import "./Listado.css"
import Producto from "../Producto/Producto"

let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTExOGYxM2Q5ZmMzODAwMjFmNjM4NDUiLCJpYXQiOjE2Mjg1NDA2OTJ9.PA0rEWI4gDP8xHFtuty2J7uJW1yCTVcnDqWyDw8UVZQ';
let options = {headers: {'Authorization': `Bearer ${token}`}}

export default function Listado () {

    const {productos, setProductos} = useContext(AppContext);

   async function obtenerProductos (){
    try{
       let peticion = await fetch('https://coding-challenge-api.aerolab.co/products', options);
       let res = await peticion.json();
       console.log(res)
       setProductos(res);
    }
    catch(error) {
        console.log(error)
    }
    
   } 

   useEffect (() => {
       obtenerProductos();
   },[]);

  
    return(
         <div className="listado">
            { productos.length > 0 ? productos.map((item) =>{
                return(
                    <Producto
                    key={item.id}
                    imagen={item.img.url} 
                    nombre={item.name}
                    precio={item.cost}
                    categoria={item.category}
                    />
                )
            }) : ("no hay productos")}
         </div>
    );
}