import React from 'react'

const Alert= (params) => {
    const deleteAlert = (e) => {
        if (e.target && e.target.tagName === 'DIV') {
            e.target.style.display = 'none';
        }
    }
    return (
        <div onClick={deleteAlert}>
            <div className="alert">
                <span>Sorry! You have no Achievements yet</span>
                {/* <i className="far fa-times-circle"></i> */}
            </div>
        </div>
    );
}

export default Alert;