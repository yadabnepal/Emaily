import React from "react";

export default ({ input, label, meta: {error, touched} }) => {
    return (
        <div>
            <label>{label}</label>
            <input {...input} />
            <span className="helper-text red-text" data-error="wrong" data-success="right">{touched && error}</span>
        </div>
    )
}