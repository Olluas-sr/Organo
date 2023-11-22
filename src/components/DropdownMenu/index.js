import './DropdownMenu.css'

export const DropdownMenu = (props) =>{
    return(
        <div className="dropdownMenu">
            <label>{props.label}</label>
                <select onChange={event =>props.onSelect(event.target.value)}  required={props.required} value={props.value}>
                    <option value={""}/>
                    {props.items.map(items => <option key={items}>{items}</option>)}
                </select> 
        </div>
    )
}