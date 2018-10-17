
import React from 'react';

export const renderInput = ({input, label, type, meta: { error, touched }}) => {
    console.log(input);
    return (
        <div>
            <div className="col s12">
                <label>{ label }</label>
                <input autoComplete="off" {...input} type={ type || 'text'}/>
                <p className="red-text text-darken-2">{ touched && error}</p>
            </div>
        </div>
    )
}
