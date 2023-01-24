import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faIdCard,faSearch, faBars} from "@fortawesome/free-solid-svg-icons";
import logo from './Assets/ca.png';
import React from 'react';


const close = () => {
    try{
    const {remote} = window.require("electron")
          remote.getCurrentWindow().close()
    }

    catch{
        //On Web, this would return an error
        //And Therefor We Will Have to Catch it
    }
}


const maximize = () => {
    try{
    const {remote} = window.require("electron")
         if (remote.getCurrentWindow().isMaximized()){
             remote.getCurrentWindow().unmaximize()
             
         }
         else{
             remote.getCurrentWindow().maximize()
         }
    }

    catch{
        //On Web, this would return an error
        //And Therefor We Will Have to Catch it
    }
}


const minimize = () => {
    try{
    const {remote} = window.require("electron")
          remote.getCurrentWindow().minimize()
    }

    catch{
        //On Web, this would return an error
        //And Therefor We Will Have to Catch it
    }
}


export  function NavReactor(){
    
    const showOrNotShowToggle =()=> {
        var x= document.getElementById("MobileNav").style;
        console.log(x.opacity)
        if (x.opacity>0.0){
            x.opacity=0.0
            x.height="0px"
            x.visibility = "hidden"
        }else{
            x.opacity=1.0
            x.visibility = "visible"
            x.height="80px"
        }
    }

    return (
        <nav>
            
            
            <img src= {logo} style={{marginLeft:20}} alt="Annex:Mymate" width={35} height={35}></img>
            <button className="red circle" onClick={close} 
            ></button>

            <button className="yellow circle" onClick={minimize} 
            ></button>

            <button className="blue circle" onClick={maximize} 
            ></button>


            <Link className="nav-components" to="/" ><li>
                 <FontAwesomeIcon className="icon" icon= {faHome}/> Home</li></Link>

            <Link className="nav-components" to= "/cards" >
            <li> <FontAwesomeIcon className="icon" icon= {faIdCard}/>Cards</li></Link>

            <form>
            <input className="navbar-input fader" placeholder="Search ..."></input>
            <button className="navbar-button fader"
            ><FontAwesomeIcon className="nav-components clicker" icon={faSearch}
            style={{marginRight:10}}
            />Search</button>
 </form>
         
            <button className="toggle" ><FontAwesomeIcon className="navbar-components"
            icon={faBars} style={{width:20, height:20}} onClick = {showOrNotShowToggle}
            /></button>
           

        </nav>
    );

}


export class NavWhenNotSignedInOrAuthed extends React.Component {

    constructor(props){
        super();
    }

    render(){
    return (
        <nav>
            
            
            <img src= {logo} style={{marginLeft:20}} alt="Annex:Mymate" width={35} height={35}></img>
           


            <div style={{alignSelf:"center", flex:"auto", marginLeft:40, }}>
                <p className="t" style={{alignContent:"center", alignItems:"center", alignSelf:"center", textAlign:"center",
                  fontSize:23,
            }}>Annex:MyMate</p>
            </div>

            <button className="red circle" onClick={close} 
            ></button>

            <button className="yellow circle" onClick={minimize} 
            ></button>

            <button className="blue circle" onClick={maximize} 
            ></button>
        
        </nav>
    );


}//this.render

}//Class
