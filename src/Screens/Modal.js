import React from "react";
import pic from "../Assets/bg.png"

export class BottomModal extends React.Component {

    constructor(props) {
        super();
        this.id = props.Id

    }

    selfDestructor (id){

        var x = document.getElementById(id).style
       
        x.visibility = "hidden" ; 
        x.height = 0

    }

    render(){
        return (
         <div id = {this.id} className="alderon1 bottom-modal" style={{borderTopLeftRadius:0, borderTopRightRadius:0, boxShadow:"0px -2px 8px #34343499", backgroundColor:"#fff", overflow:"auto" }} >
           <button className="responsive" onClick = {()=>this.selfDestructor(this.id)}
            style={{width:40,opacity:0.4, height:40, borderRadius:20,  }}>X</button>

               {this.props.children}

         </div>  
        );
        }
    

}


export class SideModal extends React.Component {

    constructor(props) {
        super();
        this.id = props.Id

    }

    
    selfDestructor (id){

        var x = document.getElementById(id).style
        
        x.visibility = "hidden" ; 
        x.width = 0

    }

    render(){
        return (
         <div  id = {this.id} className="alderon2 right-modal bottom-modal" style={{ backgroundColor:"#fff" ,boxShadow:"0px -2px 8px #34343499", backgroundImage:"url("+pic+")", backgroundSize:"cover" }} >
             
               {this.props.children}

         </div>  
        );
        }
    

}


export class NativeAlert extends React.Component  {

    constructor(props) {
        super();
        this.buttonMsg = props.Msg;
        this.id = props.Id;
        this.func = props.Func;

    }

    selfDestruct(id) {
        var x =document.getElementById(id).style;
        x.visibility="hidden";
        x.opacity = 0.0;
        x.width = 0
        x.height = 0

    }

    render() {
        return (
            <div id = {this.id} className="alderon-1" style={{borderRadius:"0px 0px 0px 0px", transition:"0.2s ease", bottom:0, backgroundColor:"#00000068", overflow:"auto"}}>

                <div className = "IosNative" style={{alignSelf:"center"}}>
                {this.props.children}
                <div style={{bottom:"0px", margin:0, padding:0, display:"flex", width:"100%"}}>
                    <button className="IosNativeButton-left responsive" onClick={() =>this.selfDestruct(this.id)} style={{width:"50%", color:"red"} } >Cancel</button>
                    <button className="IosNativeButton-right responsive"  style={{width:"50%", color:"#0078ff"} } onClick={()=>{
                        this.func()
                        this.selfDestruct(this.id)
                    }} >{this.buttonMsg}</button>
                </div>
                </div>

            </div>
        )
    }

}
