import { faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
//importing the image
import story from "../Assets/f.png";

export class StoryCard extends React.Component {

    constructor(props){
        super(props)
        this.cardname = props.text.length > 17 ? props.text.substring(0,17): props.text
        this.image = "url("+ story + ")"
    }

    render(){
        return (
            <div className="card" style={{
            width:120, 
            height:120,
            padding:10,
            paddingLeft:24,
            paddingRight:24,
            marginLeft:20, marginRight:20, borderRadius:11, 
            
            }}>
                {/*this will be the avatar*/}
                <div style={{display:"flex"}}>
                <div style={{width:35, height:35, borderRadius:17.5,
                backgroundImage:this.image, backgroundPosition:"center", backgroundRepeat:"no-repeat",
                backgroundSize:"cover", alignSelf:"flex-start", backgroundColor:"#fff",
                borderWidth:2.0,
                borderColor:"#0078ff"
                }}>

                </div>
                </div>

                <div style={{overflow:"hidden", width:80, height:50}}>
                    <p style={{fontFamily:"Lato",
                   fontWeight:"normal", fontSize:13,color:"#fff"
                }}>{this.cardname}</p>
                 
                </div>

            </div>
        )
    }

}