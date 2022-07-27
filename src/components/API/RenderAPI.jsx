import React from "react";
import {useState, useEffect} from 'react';
        

   export default function FetchAPI() {

    const [data, setData] = useState();
  
        const apiGet = () => {
          fetch("https://trackapi.nutritionix.com/v2/search/instant?query=mcdonalds",{
            headers: {
                    "x-app-id": "fc7518c6",
                    "x-app-key": "f167b58e25c39e81c5d8bff3a9c546bd",
                    "Content-Type":'application/json',
                    },})
            .then((response) => response.json())
            .then((json) => {
              console.log(json);
              setData(json)
            });
        };
    

    return (
        <div>
          My API <br />
          <button onClick={apiGet}>Fetch API DATA</button>
          <br />
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      );
    }