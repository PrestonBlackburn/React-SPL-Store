import React from 'react'

export default function Title({name,title}) {
    return (
        <div className="row">
            <div className = "col-xs-1 mx-auto text-center text-title center-block">
                <h1 className="text-capitalize font-weight-bold"> 
                 {name} <strong className="text-Grey"> {title} </strong>
                </h1>
            </div>
        </div>
    )
}


