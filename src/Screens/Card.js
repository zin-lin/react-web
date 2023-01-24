import React from "react";
import {FontAwesomeIcon as Fa} from "@fortawesome/react-fontawesome";
import { faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";
import { ProgressBar } from "./ProgressAni";

let array = ["ff0088","23eee8","dd22f0","99aae0","a9f068"]

export class LukeCard extends React.Component {

    constructor(props){
        super(props);
        this.id = props.Id
        this.text = props.text
        this.data = props.data.length
        this.doneData = props.doneData.length

    }

    render(){

        return (
            <div className="box"  style={{backgroundColor:"#0079f079" , boxShadow:"3px 2px 8px #57575799", paddingLeft:20, marginRight:20}} draggable="true">
                <p style={{color:"#fff", fontSize:14, fontWeight:"bold"}}>{this.text.length > 19 ?this.text.substring(0,19)+"...": this.text}</p>
                <ProgressBar doneData = {this.doneData} data={this.data} />
                <div style={{height:20}}></div>
                <div style={{alignItems:"flex-end", alignContent:"flex-end", display:"flex"}}>
                    <Fa icon= {faEdit} color="orange" style={{marginRight:7}}/>
                    <Fa icon={faTrash} color="#ff0034"/>
                </div>
            </div>
        );

    }

}