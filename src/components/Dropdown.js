import React from "react";
import DropdownOptions from "./DropdownOptions.js";
import "./Dropdown.css";

const Dropdown = (props) => {
    const [open, setOpen] = React.useState(false);
    const [checkedOptions, setCheckedOptions] = React.useState([]);

    const handleClickDropdown = () => {
        setOpen(!open);
      };

    return (
        <React.Fragment>
            <div className="dropdownComponent">
                <div className="dropdownSelect" onClick={handleClickDropdown}>
                    <select>
                        {/*ternary for showing selected names*/}
                        <option value="grapefruit">
                            {checkedOptions.length === 0 ? 
                                "Select an Option" :
                                checkedOptions.length === 1 ?
                                    checkedOptions[0].value :
                                    checkedOptions.length === 2 ?
                                        checkedOptions[0].value + ", " + checkedOptions[1].value:
                                        checkedOptions.length === props.list.length ?
                                            "All" :
                                            checkedOptions[0].value + ", " + checkedOptions[1].value + "..."
                            }
                        </option>
                    </select>
                    <div className="selectOverlap"/>
                </div>
                <div className="dropdownOptions">
                    <DropdownOptions 
                        list={props.list} 
                        open={open} 
                        checkedOptions={checkedOptions} 
                        setCheckedOptions={setCheckedOptions}
                    />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Dropdown;