import React from 'react';
import './Upload.css';

const Upload = () => {
    return (
        <h1 className="header">
            <h1>Upload product</h1>

            <form onSubmit>
                <label>Title</label>
                <input onChange type="text"></input>
                
            </form>
        </h1>
    )
}

export default Upload