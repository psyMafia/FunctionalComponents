import React, { Children } from "react";
import { FunctionComponent } from "react";



const Route: FunctionComponent<{path: string }>
// eslint-disable-next-line react/prop-types
= ( {path, children})=>{
   
    const outPut = window.location.pathname === path? children : null

   return (<div>
       {outPut}
   </div>)
}
export default Route;