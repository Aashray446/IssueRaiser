import React from "react";

const Dropdown = (props) => {
    return (
        <select name={props.name} value={props.value} className="block py-2.5 px-0 w-full text-sm 
        text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" onChange={props.onChange}>
            {props.options.map((option) => (
                <option className="m-4" key={option.label} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>

    );
};

export default Dropdown;