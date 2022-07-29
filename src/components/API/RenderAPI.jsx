import React from "react";
import {useState, useEffect} from 'react';

export default function FetchAPI({query}) {

  const [data, setData] = useState();


      const apiGet = () => {
        fetch(`https://trackapi.nutritionix.com/v2/search/instant?query=${query}&branded=false&detailed=true`,{
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
      // console.log(data)
      let nutrientVal
      if (data){
       let nutrients = data.common[0].full_nutrients
      //  console.log(nutrients[0].attr_id)
       for (let i = 0; i < nutrients.length; i++){
        // console.log(nutrient.attr_id)
        if (nutrients[i].attr_id === 205){
          nutrientVal = nutrients[i].value
        }
       }
       console.log(nutrientVal)
      }
  return (
    <>
      <div>
        <button onClick={apiGet}>SEE FOOD ITEMS</button>
        <br />
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
      <div>
          {/* {data.common[0].food_name} */}
          {/* {data.common[1].full_nutrients} */}
      </div>
      </>
    );
  }



  // console.log(json.common[0].food_name);


        
//Working
  //  export default function FetchAPI() {

  //   const [data, setData] = useState();
  
  //       const apiGet = () => {
  //         fetch("https://trackapi.nutritionix.com/v2/search/instant?query=mcdonalds",{
  //           headers: {
  //                   "x-app-id": "fc7518c6",
  //                   "x-app-key": "f167b58e25c39e81c5d8bff3a9c546bd",
  //                   "Content-Type":'application/json',
  //                   },})
  //           .then((response) => response.json())
  //           .then((json) => {
  //             console.log(json);
  //             setData(json)
  //           });
  //       };
    

  //   return (
  //       <div>
  //         <button onClick={apiGet}>SEE FOOD ITEMS</button>
  //         <br />
  //         <pre>{JSON.stringify(data, null, 2)}</pre>
  //       </div>
  //     );
  //   }

    // export default function FetchAPI() {

    //   const [data, setData] = useState();
    
    //       const apiGet = () => {
    //         fetch("https://trackapi.nutritionix.com/v2/search/item?nix_item_id=513fc9e73fe3ffd40300109f",{
    //           headers: {
    //                   "x-app-id": "fc7518c6",
    //                   "x-app-key": "f167b58e25c39e81c5d8bff3a9c546bd",
    //                   "Content-Type":'application/json',
    //                   },})
    //           .then((response) => response.json())
    //           .then((json) => {
    //             console.log(json);
    //             setData(json)
    //           });
    //       };
      
  
    //   return (
    //       <div>
    //         <button onClick={apiGet}>Fetch API DATA</button>
    //         <br />
    //         <pre>{JSON.stringify(data, null, 2)}</pre>
    //       </div>
    //     );
    //   }
    