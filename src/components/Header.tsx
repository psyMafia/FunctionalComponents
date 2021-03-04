 import React from "react"
import Link from "./Link"

 const Header = (): JSX.Element => {



    return(
        <div className="ui secondary pointing menu">
           
            <Link href="/translate" className="item" >translate</Link>
            <Link href="/search" className="item">search</Link>


        </div>
    )
 }

 export default Header