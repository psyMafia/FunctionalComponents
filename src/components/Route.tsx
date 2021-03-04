import React, { useEffect, useState } from "react";
import { FunctionComponent } from "react";



const Route: FunctionComponent<{path: string }>
// eslint-disable-next-line react/prop-types
= ( {path, children})=>{
   
    useEffect(()=>{
       
        console.log(window.location.pathname)

        if(window.location.pathname === "/")
        {
            window.location.pathname = "/search";
        }

        const onPopSateHandler = ()=>{
            console.log('location changed')
            setUrl(window.location.pathname)
        }
        window.addEventListener("popstate", onPopSateHandler)

        return()=>{
            window.removeEventListener("popstate", onPopSateHandler)
        }
    }, [])

    const [url, setUrl] = useState(window.location.pathname)


    const outPut = url === path? children : null

   return (<div>
       {outPut}
   </div>)
}
export default Route;