import React from 'react';

export const renderInput = ({ input, label, type, meta: { error, touched }})=> {
    return (
        <div className="row" >
            <div className="col s12">
                <label>{label}</label>
                <input { ...input } type={ type || "text" } autoComplete="off" />
                <p className="red-text text-darken-2">{ touched && error }</p>
            </div>
            
        </div>
    )
}