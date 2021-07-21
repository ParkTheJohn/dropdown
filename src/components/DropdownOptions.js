import React from "react";
import "./DropdownOptions.css";

const DropdownOptions = (props) => {
    let indices = [];

    for (let i = 0; i < props.list.length; i++) {
        indices.push(i);
    }

    // add the checked option into the state array
    const addCheckedOption = (event) => {
        props.setCheckedOptions([...props.checkedOptions, {
            value: event.target.value
        }]);
    }

    // remove the checked option from the state array when it is unchecked
    const deleteCheckedOption = (event) => {
        props.setCheckedOptions(props.checkedOptions.filter(option => option.value !== event.target.value));
    }

    // select or deselect all options checking whether 
    const selectDeselectAll = () => {
        const tempArray = []
        if (props.checkedOptions.length < props.list.length) {
            // add all into state array
            for (let i = 0; i < props.list.length; i++) {
                const option = {
                    "value": props.list[i].name,
                };
                tempArray.push(option);
            }
            props.setCheckedOptions(tempArray);

        } else {
            //remove all from the state array
            props.setCheckedOptions(tempArray);
        }
    }

    return (
        <React.Fragment>
            <div id="checkboxes" style={(props.open) ? {display: "block"} : {display: "none"}}>
                {/*separate select / deselect all checkbox with a separate function*/}
                <label>
                    <input 
                        type="checkbox" 
                        onChange={selectDeselectAll}
                        checked={props.checkedOptions.length === props.list.length}
                    />
                    Select / Deselect All
                </label>
                {/*for every option in the options list, create a checkbox component*/}
                {indices.map((index) => (
                    <label key={index}>
                        <input 
                            type="checkbox" 
                            value={props.list[index].name}
                            onChange={
                                props.checkedOptions.some(option => option.value === props.list[index].name) ? 
                                    deleteCheckedOption : 
                                    addCheckedOption
                                }
                                checked={props.checkedOptions.some(option => option.value === props.list[index].name)}
                        />
                        {props.list[index].name}
                    </label>
                ))}
            </div>
        </React.Fragment>
    )
}

export default DropdownOptions;