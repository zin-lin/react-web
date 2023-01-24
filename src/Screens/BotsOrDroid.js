/* eslint-disable no-unused-vars */
import React,{ useEffect, useState} from "react";
import welcomePage from "../Assets/day1.jpg"
import "firebase/auth";
import Flat from "flatlist-react";
import  firebase from "firebase";
import {FontAwesomeIcon as Fa} from "@fortawesome/react-fontawesome";
import { faRobot, faArchive,faEye,faClipboardList,faIndustry, faMicroscope, faUserSecret, faUser, faTools } from "@fortawesome/free-solid-svg-icons";
import assistance from "../Assets/hello.png";
import roboBg from "../Assets/robotBg.png";
import bg from "../Assets/bg.png";
import addbotlogo from "../Assets/addbot.jpg";
import spybot from "../Assets/spybot.png";
import wokbot from "../Assets/wokbot.png";

import Loader from "react-loader-spinner"
//#region Image Imports
 import logo from "../Assets/card.png";

 export function DroidPage () {


    return (
        <div className="did">
        <div style={{width:"100%", flex:1, overflow:"auto"}}>
            <div className="side-nav">
                <div className="tit" style={{width:"100%", paddingTop:30,paddingBottom:30,display:"flex",backgroundPosition:"center"  ,
             backgroundSize:"cover"}}>
                 <img src={roboBg} alt="" style={{width:80, height:80, opacity:0.28, position:"absolute", left:80, top:10}}></img>
                    <Fa icon={faRobot} color="#fff" size = "2x" style={{marginLeft:15, marginRight:10}}/>
                    <p style={{color:"#fff", fontWeight:"bold",margin:0,  verticalAlign:"middle", marginTop:5, fontFamily:"Lato", fontSize:17}}>Your DROIDS</p>
                </div>

                <div style = {{borderRadius:11, padding:5, backgroundColor:"#0089ff89", margin:7, marginRight:17, marginLeft:17}}>
                <button className="side-nav-component" style={{color:"#fff"}}>+ Add More Droid</button>
                </div>

                <div style={{width:"100%", paddingTop:10,paddingBottom:10, overflow:"auto", height:'27%', boxShadow:"inset 0px 2px 8px #bbb", }}>
                <button className="side-nav-component"><Fa icon={faTools} style={{marginRight:20}}/>Worker Droid</button>
                <button className="side-nav-component"><Fa icon={faMicroscope} style={{marginRight:20}}/>Spy Droid</button>
                <button className="side-nav-component"><Fa icon={faUserSecret} style={{marginRight:20}}/>Security Droid</button>
                <button className="side-nav-component"><Fa icon={faArchive} style={{marginRight:20}}/>Archive Droid</button>
                </div>
             
            </div>

            <div className="grogu" style={{backgroundImage:"url("+bg+")", backgroundSize:"contain",backgroundRepeat:"no-repeat"}}>
                <div style={{overflow:"auto", height:"calc(100vh - 70px)",maxHeight:"calc(100% - 70px)", width:"100%"}}>

                    {
                        /*
                        This will be our actual page
                        */
                    }
                    <p style={{color:"#fff", fontSize:21}}><Fa icon={faIndustry} style={{marginRight:20}}/>Droid Factory</p>

                    <div style={{height:170, display:"flex", backgroundColor:"transparent"}}>
                        
                        <div className="grey-without-padding" style={{padding:0, overflow:"hidden", display:"flex", maxHeight:150, height:150}}>
                          <div style={{backgroundImage:"url("+ addbotlogo +")", backgroundColor:"transparent",height:"100%",  width:'50%',backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
                        
                          </div>

                        <div class="Delaware">
                         <div className="grey-color" style={{margin:10, height:89, overflowY:"auto", marginTop:0, marginBottom:0, }}>
                            <p className="biggerwhenlarger" style={{margin:3, fontSize:12}}>Annex Bot is Waiting For You.  </p>
                            <button className="orange" style={{fontSize:12, marginBottom:0}}>Open</button>
                         </div>
                         </div>

                           
                        </div>

                    </div>

                    <div className="hovertoScrollX" style={{height:160, display:"flex",width:'92%',marginLeft:10,backgroundColor:"transparent", marginTop:30 ,paddingRight:10, paddingBottom:10,
                           scrollMargin:20, scrollbarWidth:100
                        }}>
                             <div style={{minWidth: 7,}}></div>
                        

                        <div className="box" style={{backgroundColor:"#ff0088", boxShadow:"2px 2px 8px #57575799",}}>
                            <Fa icon={faRobot} size="4x" style={{margin:10, }} color="#fff"></Fa>
                            <button className="line"><Fa icon={faEye} style={{marginRight:7}}/>Open AnnexBot</button>
                        </div>

                        <div className="box" style={{backgroundColor:"#23eee8", boxShadow:"2px 2px 8px #57575799"}}>
                        <Fa icon={faMicroscope} size="4x" style={{margin:10, }} color="#fff"></Fa>
                        <button className="line"><Fa icon={faEye} style={{marginRight:7}}/>He's A Spy</button>

                        </div>

                        <div className="box" style={{backgroundColor:"#dd22f0", boxShadow:"2px 2px 8px #57575799"}}>
                        <Fa icon={faTools} size="4x" style={{margin:10, }} color="#fff"></Fa>
                        <button className="line"><Fa icon={faEye} style={{marginRight:7}}/>Worker Droid</button>

                        </div>


                        <div className="box" style={{backgroundColor:"#99aae0", boxShadow:"2px 2px 8px #57575799"}}>
                        <Fa icon={faUserSecret} size="4x" style={{margin:10, }} color="#fff"></Fa>
                        <button className="line"><Fa icon={faEye} style={{marginRight:7}}/>Reporting Duty!</button>

                        </div>

                        <div className="box" style={{backgroundColor:"#a9f068", boxShadow:"2px 2px 8px #57575799"}}>
                        <Fa icon={faArchive} size="4x" style={{margin:10, }} color="#fff"></Fa>
                        <button className="line"><Fa icon={faEye} style={{marginRight:7}}/>Files For Me</button>

                        </div> 

                        <div style={{minWidth: 3, marginLeft:3}}></div>
 
                    </div>


             
                </div>
            </div>

            </div>

        </div>
    );



 }
































