import React from "react";

export class Avatar extends React.Component{

    constructor(props){
        super(props)
        this.style = {
            //Empty
        }
        this.text = props.text

    }

    render(){
        return (
            <div style={{width:40, overflow:"hidden" , borderRadius:20, height:40,
            background:"#739898", alignContent:"center" ,alignItems:"center",
            textAlign:"center"
            }}>
              <p style={{fontFamily:"Lato", fontSize:12, marginBottom:15, verticalAlign:"top",
               color:"white", alignSelf:"flex-start", textAlign:"center"
            }}>{this.text}</p>
            </div>
        )
    }

} 