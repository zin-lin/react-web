/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React,{ useEffect, useRef, useState} from "react";
//import welcomePage from "../Assets/day1.jpg"
import {Link} from "react-router-dom";
import "firebase/auth";
// eslint-disable-next-line no-unused-vars
import {NativeDialog, NativeNoticeWithoutSelfDestruct} from "./nativeRenderer";
import  firebase from "firebase";
import {FontAwesomeIcon as Fa} from "@fortawesome/react-fontawesome";
import {faMailBulk, faLock,faSignInAlt, faUserPlus, faRedo } from "@fortawesome/free-solid-svg-icons";
import Loader from "react-loader-spinner"
//#region Image Imports
 import logo from "../Assets/card.png";
//#endregion


export function  Register(){

    //#region Loader
    ///<summary>Dealing With State
    ///</summary>

    // eslint-disable-next-line no-unused-vars
    const [notloading, setNotLoading] = useState(true);
    
    //#endregion

    const SignIn = (email, password)=>{

    if (email.length> 8 && password.length>6){

          var loader = document.getElementById("Loading").style;
          loader.opacity = 1.0
          loader.width = "100%"
          loader.height = "100%"
          
          var Sign = firebase.auth().signInWithEmailAndPassword(email, password).then(
                    user => {
                        if (user !== null)
                        {
                            loader.opacity = 0.0
                            loader.width = "0px"
                            loader.height = "0px"
                            //Do This
                        }
                       
                    }
                ).catch(err=> {
                    var x = document.getElementById("UserError").style;
                    x.opacity = 1.0
                    x.width = "100%"
                    x.height = "100%"
                    loader.opacity = 0.0
                    loader.width = "0px"
                    loader.height = "0px"

                })
            
            }
    else{
        //Getting Native Renderer
        var x = document.getElementById("FormError").style;
        x.opacity = 1.0
        x.width = "100%"
        x.height = "100%"
    }
          
    }

    useEffect(()=>{

        document.getElementById("SignIn").addEventListener("submit",(e)=>{
            e.preventDefault()
            var form = document.getElementById("SignIn")
            SignIn(form.email.value, form.passwd.value);
         })

    })
    // const reDer = useRef(null)
    // useEffect(()=>{
    //     const form  = useRef.current
    // })

    //this.render(()=> return //)

    return (

        <div style={{width:"100%", flex:1, overflow:"auto"}}>
      
          <div>
          <div className="alderon-1" id="Loading">
            
            <div style={{marginTop:20, margin:50}}>
            <img src={logo} style={{width:50, height:50, margin:2}}></img>
            <Loader type="Audio" color="#00BFFF" height={80} width={80} />
          </div>
          </div>
          <NativeDialog Id = "FormError" >
           <div style={{color:"#fff"}}>
            <p style={{fontSize:19}}>
             Error!
            </p>
            <p>Insuffeint Address and (or) password</p></div>
          </NativeDialog>

          <NativeDialog Id = "UserError" >
           <div style={{color:"#fff"}}>
            <p style={{fontSize:19}}>
             Opps!
            </p>
            <p>Invalid Email Address and (or) password</p></div>
          </NativeDialog>
           
           <div className="auth-container" style={{marginBottom:5}}>
           <div style={{width:'100%', alignContent:"center", alignItems:"center", flex:"auto", flexDirection:"column"}}>

                <div style={{alignContent:"center", alignSelf:"center", alignItems:"center", backgroundColor:"#fbfbfb"}}>
                    <img src={logo} style={{width:50, height:50, margin:2}}></img>
                </div>
                </div>

                <p style={{fontSize:23, 
                    marginTop:5, color:"#000", 
                    alignSelf:"center", textAlign:"center", alignContent:"center", alignItems:"center"}}>Sign In to Annex:Mymate</p>
               <form id = "SignIn">
               <div className="center" style={{color:"#777"}}>
               <p style={{marginLeft:41}}>Your Email <Fa icon={faMailBulk}/> </p>
               </div>

                <input id="email" placeholder="email eg.xxxyyyzzz@gmail.com" style={{minWidth:"80%"}} ></input>

               
                <div className="center" style={{color:"#777"}}>
               <p style={{marginLeft:41, alignSelf:"center", textAlign:"center"}}>Your Password <Fa icon={faLock}/> </p>
               </div>

                <input id = "passwd" placeholder="password eg.yourpassword1234" type="password" style={{minWidth:"80%"}}  ></input>

              
                <hr style={{height:0.3,boxShadow:"none", width:"77%", marginBottom:3}}></hr>
                
                <button className="orange centered padded2" style={{flex:"auto", minWidth:"80%", marginTop:20}}>
                    <Fa color="#fff" size="1x" icon = {faSignInAlt} style={{marginRight:7}}/>
                    Sign In</button>
                

               
                </form>

                <button className="invisible responsive"> <Fa color="#ddd" size="1x" icon = {faRedo} style={{marginRight:7}}/>
                forget password?</button>

           </div>

           <p style={{color:"#ddd", margin:0}}>Have an Account</p>
           <br></br>

            <Link to ="/"><button className="blue centered padded2" style={{flex:"auto", minWidth:370, marginTop:5}}>
            <Fa color="#fff" size="1x" icon = {faUserPlus} style={{marginRight:7}}/>
                Sign In</button></Link>

                <br/>
                <br/>
                

                </div>

        </div>

    );

}