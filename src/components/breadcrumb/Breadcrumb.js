import React from "react";

export default function Breadcrumb(props) {
    return(
        <ul className="breadcrumbs">
            <li>
                <a href="/">Home</a> > &nbsp;
            </li>
            <li>
                {props.charName}
            </li>
        </ul>
    )
}