import { useState } from 'react'
import './InputText.css'

export const InputText = (props) => {

    const [value, setValue] = useState('') 

    const onType = (event) => {
        props.onType(event.target.value)
    }

    return(
        <div className="text-camp">
            <label>
                {props.label}
            </label>
                <input value={props.value}  onChange={onType} required={props.required} placeholder={props.placeholder}/>
            
        </div>
    )
}