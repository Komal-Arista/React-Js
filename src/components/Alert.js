import React from 'react'

function Alert( {alert = "Set default alert here", closeAlert} ) {

    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    };

  return (
    <div style={ {height: '50px'}}>
        { 
            alert && ( // check alert is not null
            <div className={`alert alert-${ alert.type } alert-dismissible fade show`} role="alert">
                <strong>{ capitalize(alert.type) }</strong> : { alert.msg }
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={closeAlert} ></button>
            </div>
            )
        }
    </div>
    
  )
}

export default Alert
