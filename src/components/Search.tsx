import React, { useState } from "react";

const Search: React.FC = () => {

    const [searchItem, setSearchItem] = useState("");
     
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>)=>{

       console.log(`Typed value: ${e.target.value}` )
       setSearchItem(e.target.value);
    }

    return (
        <div className="ui form">
            <div className="field">
                <label>Enter search term</label>
                <input
                    value={searchItem}
                    onChange = {onChangeHandler}
                    className="input"></input>
                <p></p>
            </div>
        </div>
    )
}
export default Search;