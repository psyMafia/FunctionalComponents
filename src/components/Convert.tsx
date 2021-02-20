import Axios from "axios"
import React, { useEffect, useState } from "react"
import { threadId } from "worker_threads";
import { IOption } from "./DropDown"

interface IConvertProps {
    lang: IOption,
    text: string
}

const Convert: React.FC<IConvertProps> = (props: IConvertProps) => {

    const [translated, setTranslated] = useState("");
    const [debouncedText, setDebouncedText] = useState(translated)



    useEffect(()=>{
        const timeOut = setTimeout(()=>{
            setDebouncedText(props.text)
        }, 1000)
        return ()=>{
            clearTimeout(timeOut);
        }
    }, [ props.text])


    useEffect(() => {
        console.log("lang prop has changed")

        doTranslation()

    }, [props.lang, debouncedText])


    const doTranslation = async () => {

        const responce = await Axios.
            post("https://translation.googleapis.com/language/translate/v2",
                {},
                {
                    params: {
                        q: debouncedText,
                        target: props.lang.value,
                        key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM"
                    }
                }
            )


        console.log(responce.data.data)
        const result = responce.data.data.translations[0].translatedText

        setTranslated(result)
    }


    return (
        <div>
            <h1 className="ui header">{translated}</h1>
        </div>
    )
}

export default Convert