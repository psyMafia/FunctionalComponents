
import { Certificate } from "crypto";
import React, { useState } from "react";
import { FunctionComponent } from "react";
import Convert from "./Convert";
import Dropdown, { IOption } from "./DropDown";

const options: IOption[] = [
    {
        label: "Hebrew",
        value: "he"
    },
    {
        label: "Russian",
        value: "ru"
    }
]

//   key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
const Translate: FunctionComponent = () => {

    const [lang, setCurrentLang] = useState(options[0])
    const [text, setText] = useState("");


    return (

        <div>

            <div className="ui form">

                

                    <div className="field">
                        <label>Translae text</label>
                        <input type="text" placeholder="text"
                            value={text} onChange={(e) => setText(e.target.value)}
                        />
                    </div>

                   
                        <Dropdown
                            label="Select language"
                            listOfItems={options}
                            selected={lang}
                            onSelectedCallback={setCurrentLang}
                        ></Dropdown>
                  

                    <div className="field">
                        <Convert lang={lang} text={text}></Convert>
                    </div>

                
            </div>





        </div>
    )


}

export default Translate