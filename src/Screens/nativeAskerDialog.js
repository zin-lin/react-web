import React from "react";

//This Class Will be a Class That Say 

export class NativeDialog extends React.Component {

    constructor ({Id}) {
        super();//
        //Calling the base class's constructor or say __init__ in python
        this.id = Id??"this"
        console.log(this.id)
    }


    selfDestruct(id) {
        
        var x = document.getElementById(id).style
        x.opacity = 0.0
        x.width = 0
        x.height = 0

    }

    selfConstruct() {
        var x = document.getElementById(this.id).style
        x.opacity = 1.0
        x.width = "100%"
        x.height = "100%"

    }

    render(){
        return (
           <div className="alderon" id={this.id}>
            <button className="responsive" onClick = {()=>this.selfDestruct(this.id)}
            style={{width:40,opacity:0.4, height:40, borderRadius:20}}>X</button>
            <div style={{marginTop:20, margin:50}}>
              {this.props.children}
            </div>
            </div>
        );
    }

}