import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faSignOutAlt} from "@fortawesome/free-solid-svg-icons"

export class Auther extends React.Component {

    constructor ({user, func}) {
        super ();
        this.user = user
        this.func = func
    }

    render() {
        return (
            <div style={{overflowY:"auto", overflowX:"hidden"}}>
                <div 
                 className = "actions"
                >
                    <p style={{color:"#fff"}}>Options for {this.user.email.substring(0,9)+"..."}</p>
                    <button className="responsive"><FontAwesomeIcon icon={faEdit}/>Settings</button>
                    <br/>
                    <button className="red" 
                    onClick={this.func}
                    ><FontAwesomeIcon icon={faSignOutAlt} color="#fff">
                        </FontAwesomeIcon>Logout</button>
                </div>
            </div>
        )
    }

}