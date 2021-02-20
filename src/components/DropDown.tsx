import { render } from '@testing-library/react'
import React, { useEffect, useRef, useState } from 'react'

export interface IOption {
    label: string;
    value: string;
}

export interface IOptionProps {
    listOfItems: IOption[],
    selected?: IOption,
    onSelectedCallback?: (T: IOption) => void,
    label?: string
}

const Dropdown: React.FC<IOptionProps> = (props: IOptionProps) => { // find solution

    console.log(props.listOfItems)

    const [open, setOpen] = useState(false);

    useEffect(() => {

        console.log("useEffect")

        const clickHandler = (event: any) => {



            if (dropBoxRef.current?.contains(event?.target as Node)) {
                console.log("click on DropBox")
                return
            }

            console.log("click on Body - closing drop box")

            setOpen(false)
        }

        document.body.addEventListener("click", clickHandler)

        return () => {
            console.log("useEffect cleaned")
            document.body.removeEventListener("click", clickHandler);
        }
    }, [])


    const dropBoxRef: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

    const onItemSelectHandler = (item: IOption) => {
        console.log("Clicked on", item)

        props.onSelectedCallback?.(item);

    }

    const listOfJsx = props.listOfItems.map((optionItem) => {

        if (props.selected === optionItem) { return null }

        return (
            <div key={optionItem.value} className="item" onClick={() => onItemSelectHandler(optionItem)}>
                {optionItem.label}
            </div>
        )
    })



    return (

        <div className="field">
            <label>{props.label}</label>

            <div className={`ui fluid selection dropdown ${open ? "active visible" : ""}`}
                onClick={() => setOpen(!open)}
                ref={dropBoxRef} >
                <input type="hidden" name="gender" />
                <i className="dropdown icon"></i>
                <div className="text">{props.selected?.label}</div>
                <div className={`menu ${open ? "transition visible" : ""}`}>
                    {/* <div className="item" data-value="1">Male</div>
                <div className="item" data-value="0">Female</div> */}
                    {listOfJsx}
                </div>
            </div>
        </div>
    )

}

export default Dropdown
