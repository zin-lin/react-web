/* eslint-disable no-unused-vars */
import React,{ useEffect, useState} from "react";
import welcomePage from "../Assets/day1.jpg"
import "firebase/auth";
import Flat from "flatlist-react";
import  firebase from "firebase";
import {FontAwesomeIcon as Fa} from "@fortawesome/react-fontawesome";
import {faProjectDiagram, faUsers, faUserCircle, faMale,faFemale ,
    faEdit,
    faSignOutAlt, faUserFriends, faArrowAltCircleRight, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import roboBg from "../Assets/robotBg.png";
import bg from "../Assets/cardbg.png";
import {BottomModal, SideModal, NativeAlert} from "./Modal";
//import {Loading} from "./Loader"

import Loader from "react-loader-spinner"
//#region Image Imports
import logo from "../Assets/card.png";




 export function UserPage(){

    const [profile, setProfile] = useState("sti")
    const [name, setName] = useState("")
    const [nname, setNname] = useState("")
    const [des, setDes] = useState("")
    const [gender, setGender] = useState("")
    const user = firebase.auth().currentUser;

    const SignOut = () => {
        firebase.auth().signOut()
    }

    useEffect(()=>{

       var un = firebase.firestore().collection("Profile").doc(user.uid).onSnapshot(sn =>
        {
         if (sn)
        {    var s = sn.data()
            console.log(s)
            try{
            document.querySelector("oxoxoc").reset()}
            catch{console.log("Hell")}
            try{
             
             setProfile(s);
             setName(s["name"])
             setGender(s["gender"])
             setDes(s["description"])
             console.log(s.description)
             setNname(s["nickname"])
            }
             catch{
                 //NOthingness
                 setProfile(null);
                }
}
        }
        
        )

        return ()=> un();

    }, [setProfile, user.uid])


    const UpdateStatus = () => {
        //ES-Lint Is Not Is Charge
        //Official Vanilla Region

        var x = document.getElementById("oxoxoc")
        var n = x.name.value;
        var nn = x.nname.value;
        var d = x.des.value;

        x.reset()

        firebase.firestore().collection("Profile").doc(user.uid).set({
            "name":n,
            "nickname":nn,
            'description':d,
            'gender':"Male"
        }
        ).then(gotIt => {
         
        })

        var c = document.getElementById("updater").style;
        c.width=0;
        c.height =0;
        c.opacity = 0.0;
        c.visibility = "hidden"

    }

    const Updater = () => {
        var x = document.getElementById("updater").style;
        x.width="100%"
        x.height = 'calc(100% - 70px)';
        x.opacity = 1.0;
        x.visibility = "visible"
    }

    const CreatorGuide =(_/* No Era */)=>{

        var x = document.getElementById("AddPage").style;
        x.height = 'calc(100% - 77px)';
        x.visibility = "visible" ; 

    }

    const NextGuide = () => {
        var x = document.getElementById("NextPage").style;
        x.width = "100%" ;
        x.visibility = "visible" ; 
        
    }

    const BackGuide = () => {
        var x = document.getElementById("NextPage").style;
        x.width = "0%" ;
        x.visibility = "hidden" ; 
    }

    const AddProfile = () => {
        firebase.firestore().collection("Profile").doc(user.uid).set(
            {
                "name": name,
                "nickname": nname,
                "description": des,
                "gender": gender,
            }
        ).then(
            pro => {

                if (pro!==null){
                            
                    var x = document.getElementById("NextPage").style;
                    x.width = "0%" ;
                    x.visibility = "hidden" ; 
                    var x1 = document.getElementById("AddPage").style;
                    x1.height = "0%" ;
                    x1.visibility = "hidden" ; 
            }}
        )
    }


    return(

    <div className="did">


    <div style={{width:"100%", flex:1, overflow:"auto"}}>

        <NativeAlert Id="updater" Msg="Update" Func = {UpdateStatus}>
          <div  style={{padding:20, paddingTop:5}}>
            <p style={{fontFamily:"sans-serif", fontWeight:"bold"}}>Update User Status</p>
            <form id = "oxoxoc">
            <input id = "name" style={{marginRight:0, marginBottom:5, width:"80%", fontSize:12, padding:8}} placeholder="name" defaultValue ={name} ></input>
            <input id = "nname" style={{marginRight:0, marginBottom:5, width:"80%", fontSize:12, padding:8}} placeholder="nickname" defaultValue={nname} ></input>
            <textarea id = "des" style={{marginRight:0, marginBottom:5, width:"80%", fontSize:12, padding:8}} placeholder="description" defaultValue={des} ></textarea>
            </form>

          </div>
        </NativeAlert>
         

        <BottomModal Id = "AddPage" >

            
            <div style={{width:"100%", flex:1, overflow:"auto",bottom:"0px", }}  >
            <Fa icon={faUserCircle} size="3x" style={{margin:20, color:"#ddd"}} /> 
              <p style={{fontSize:24, marginTop:2}}> Set Up Profile</p>
               <p style={{color:"#aaa", fontSize:13}}>Your Name:</p>
               <input id="email" placeholder="Mr. Damian James" style={{minWidth:"60%"}} onChange={(val)=>{ setName(val.target.value);
           // console.log(val.target.value)
            }} ></input>
               <p style={{color:"#aaa", fontSize:13}}>Your Nickname:</p>
               <input id="email" placeholder="Darth Syntax" style={{minWidth:"60%"}} onChange={(val)=> setNname(val.target.value)} ></input>
               <p style={{color:"#aaa", fontSize:13}}>Describe Yourself:</p>
               <input id="email" placeholder="I'm a CEIT student" style={{minWidth:"60%"}} onChange={(val)=> setDes(val.target.value)} ></input>
               <br/>
               <br/>
               
               <button className="blue"  onClick={NextGuide}  > Next <Fa icon={faArrowRight} style={{marginLeft:10, color:"#ddd"}}/> </button>
               <div style={{height:10}}></div>
            </div>
        </BottomModal>

        <SideModal Id = "NextPage" >
                <button className="orange" onClick={BackGuide}>X</button>    
                
                <p style={{color:"#fff", fontSize:13, margin:0}}>Describe Yourself:</p>

            <div style={{height:"calc(100% - 30px)"}}>
                <select placeholder="Gender" style={{width:"40%"}} onChange= {(val)=>{ setGender(val.target.value)
                
               // console.log(val.target.value)
                }} >
           

                <option className="responsive paddd" value="Rather not Mention" style={{padding:10}}>Rather Not Mention</option>
                    <option className="responsive paddd" value="Male" style={{padding:10}}>Male</option>
                    <option className="responsive paddd" value="Female" style={{padding:10}}>Female</option>
                </select>

                <br></br>
                <br></br>

                <Fa icon={faUserCircle} size="5x" style={{margin:0, color:"#ddd"}} /> 
                    <br/>
                <button className="green" onClick={AddProfile} >Create Profile</button>

            </div>

            </SideModal>


        <div className="side-nav">
            <div className="tit-violet" style={{width:"100%", paddingTop:30,paddingBottom:30,display:"flex",backgroundPosition:"center"  ,
              backgroundSize:"cover"}}>
             <img src={roboBg} alt="" style={{width:80, height:80, opacity:0.28, position:"absolute", left:80, top:10}}></img>
                <Fa icon={faUserCircle} color="#fff" size = "2x" style={{marginLeft:15, marginRight:10}}/>
                <p style={{color:"#fff", fontWeight:"bold",margin:0,  verticalAlign:"middle", marginTop:5, fontFamily:"Lato", fontSize:17}}>Your Account</p>
            </div>

            <div style = {{borderRadius:11, padding:5, backgroundColor:"#0089ff89", margin:7, marginRight:17, marginLeft:17}}>
            <button className="side-nav-component" style={{color:"#fff"}}>+ Find More Parnters</button>
            </div>

            <div style={{width:"100%", paddingTop:10,paddingBottom:10, overflow:"auto", height:'27%', boxShadow:"inset 0px 2px 8px #bbb", }}>
            <button className="side-nav-component"><Fa icon={faProjectDiagram} style={{marginRight:20}}/>Current Work</button>
            <button className="side-nav-component"><Fa icon={faUsers} style={{marginRight:20}}/>Community</button>
            <button className="side-nav-component"><Fa icon={faUserFriends} style={{marginRight:20}}/>Your Subcribers</button>
            <button className="side-nav-component" onClick= {SignOut} ><Fa icon={faSignOutAlt} style={{marginRight:20}}/>Log Out</button>
            </div>
         
        </div>

        <div className="grogu" style={{backgroundImage:"url("+bg+")", backgroundSize:"contain",backgroundRepeat:"no-repeat"}}>
            <div style={{overflow:"auto", height:"calc(100vh - 70px)",maxHeight:"calc(100% - 70px)", width:"100%"}}>

                {
                    /*
                    This will be our actual page
                    */
                }

        <div style={{marginRight:"70%"}}>
                <Fa icon={faUserCircle} size="6x" style={{margin:20, color:"#fff"}} />
        </div>

        { profile !== null &&  profile !=="sti" &&
        
        
        <div className="hovertoScrollX" style={{height:180, display:"flex",width:'100%',backgroundColor:"transparent", marginTop:0 ,margin:0,paddingBottom:10,
         
     }}>
           <div className="grey-without-padding" style={{ backgroundColor:"#eee", width:"100%"}}>
              <p style={{fontSize:20, marginBottom:2,color:"#223b52c7", fontWeight:"bold"}}>{gender !=="Rather not Mention" && <Fa icon={gender==="Male"?faMale: faFemale} className="active" style={{marginRight:10}}/>}
              {name}<Fa icon={faEdit} className="active" style={{marginLeft:10}}
              
              onClick = {Updater}
              
              /></p>
              <p style={{margin:0,color:"#ff0045", fontSize:13}}>({nname})</p>

              <p style={{ marginBottom:3,color:"#666", fontSize:12, marginLeft:40, marginRight:40}}>{des.length>150? des.substring(0, 150)+"., etc": des}</p>
            <hr style={{ border:"none", height:"1.0px"}}></hr>

           </div>

        
        </div>
        
        }

        <div className="hovertoScrollX" style={{height:180, display:"flex",width:'100%',backgroundColor:"transparent", marginTop:10 ,margin:0,paddingBottom:10,
                        
                        }}>
        { profile === null &&

            <div className="violet-color">
                <p style={{color:"#fff", marginBottom:6, fontSize: 19 }}><Fa style={{marginRight:10}} icon={faUserCircle} />You Dun Have a Profile Yet</p>
                <p  style={{color:"#fff", marginTop:0, fontSize:12}} >Dun Worry you can make one!</p>

                <button className="green" onClick = {CreatorGuide} >Create Profile</button>

            </div>
        }

        { profile === 'sti' &&

            <div className="actions" >
                <Loader type="Audio" color="#00BFFF" height={80} width={80} />
            </div>

        }

        { profile !== null && profile !=="sti" &&
        
        <div className="hovertoScrollX" style={{height:180, display:"flex",width:'100%',backgroundColor:"transparent", marginTop:0 ,margin:0,paddingBottom:10,
        
     }}>
         
           <div className="grey-color">

           </div>
           <div className="green-color" style={{background: "linear-gradient(to left,#e150d0,#ff0344,#ef3fff )" , boxShadow:"2px 2px 8px #24242488" , borderWidth:0}}>

          </div>

        </div>
        
        }



        </div>

  
        
    </div>
    </div>
    </div>
    </div>
    )

 }