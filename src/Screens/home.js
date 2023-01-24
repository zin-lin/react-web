/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React,{ useEffect, useState} from "react";
import welcomePage from "../Assets/day1.jpg"
import "firebase/auth";
import Loader from "react-loader-spinner";
import Flat from "flatlist-react";
import  firebase from "firebase";
import {Auther} from "./Auther";
import {Avatar} from "./avatar";
import logo from "../Assets/ca.png"
import logo1 from "../Assets/cardss.png"
import annexbot from "../Assets/anxbot.png";
import {Link, useHistory} from "react-router-dom"
import {StoryCard} from "./storyCards"
import {NativeDialog} from "./nativeAskerDialog"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserFriends, faEdit,faCalendar, 
  faUser, faInfo,faSignOutAlt,faUserEdit,
   faBookmark,faRobot,faWifi,
    faFolderOpen,faMailBulk,
    faAlignRight} from "@fortawesome/free-solid-svg-icons";

export default function Home(){
    
    const logout = async() => {
      await firebase.auth().signOut()
    }

    const user = firebase.auth().currentUser;
    const [cards, setCAards] = useState(["hell"])
    const [ifif , setifif] = useState(false)

    const showDialog = () =>{
     var x = document.getElementById("Okp").style;
     x.opacity = 1.0
     x.width = "100%"
     x.height = "100%"

    }

    const StoryRenderer =()=>{
     return( <Flat style={{marginRight:4}}
      sortBy={["name:", {key: "docId", descending: false}]}
      renderWhenEmpty={()=>{
       return <div style={{flex:"auto",width:"100%",display:"flex"}}>
        <div className = "actions" style={{display:"flex"}}>
           <img src = {logo1} style={{width:80, height:80}} alt = "annex logo"/>
           <p className="biggerwhenlarger" style={{fontWeight:"lighter", fontSize:11, overflow:"auto", height:66}}>There is still no cards yet. But Dun worry! you can Add Some</p>
           <button className="orange">+Card</button>
        </div>
        
        <div style={{display:"flex"}} className = "orange-color" >
           <img src = {annexbot} style={{width:80, height:80}} alt = "annex logo"/>
           <p className="biggerwhenlarger" style={{fontWeight:"lighter", fontSize:12, overflow:"auto", height:60}}>Don't Know How to Use? Annex Bot is here for you</p>
           <button className="green">Guide</button>
        </div>

        </div>
      }}
      list = {cards}
      renderItem ={(card)=><StoryCard text={card["name:"]}/>  }
          
      /> )
      
    }

    useEffect(()=>{
      const un = 
      firebase.firestore().collection("PlanCards").where("userId","==", user.uid).orderBy("name:").limit(118).onSnapshot(
        sn=>{ 
          var array = []
          sn.docs.map(
          doc =>{
            var x =doc.data()
            x["docId"] = doc.id;
            
            array.push(x)
          }
          
        )
        
        setCAards(pre=>array);
        setifif(pre => !pre)
        console.log(ifif)
      
      }
      )

      return ()=> un();

    },[setCAards])

    let nav= useHistory()

    const ToUser = () => {
      nav.push("/user")
    }

   
    return (
      <div style={{width:"100%", flex:1, overflow:"auto"}}>
       
       <NativeDialog Id = "Okp">
         <Auther user = {user??{email:"Current User"}} func = {logout}/>
       </NativeDialog>

       <div className="center user-materials" style={{
         marginBottom:7, marginTop:7,paddingBottom:7 , 
           padding:15,
           overflow:"auto",
           paddingTop:7,
           display:"flex"
            }}>
            <div style={{verticalAlign:"middle"}}>
             <Avatar text = {user.email.substring(0,1)} /></div>
             <div style={{alignSelf:"center", margin:0, marginLeft:29,
              backgroundColor:"#eee", paddingLeft:20, paddingRight:20,
              borderRadius:11, borderWidth:0.6, borderColor:"#ddd", verticalAlign:"middle"
             }} >
                <p onClick={ToUser} style={{fontSize:14}}>Welcome - {user.email}</p>
             </div>

             <div  className="shadow titleApp" style={{alignSelf:"center", marginLeft:80, padding:5, borderRadius:9,
             
             backgroundColor:"#e9e9e9", width:"24%"}}>
             <div style={{display:"flex"}}> 
             <p style={{fontSize:20, margin:0 , padding:0, width:'80%'}}>Annex:MyMate </p>
             <img src={logo} style={{width:26, height:26}}></img>
             </div> 
             <p style={{fontSize:10, margin:0 , padding:0, color:"#a0a0a0"}}>@keep your days oragnised</p>

             </div>

             <div className = "hover only-right inline">

             <FontAwesomeIcon color="#aaa" icon={faBookmark} size="1x" style={{verticalAlign:"middle"}}/>

             <button className="red"
             onClick={logout}><FontAwesomeIcon icon={faSignOutAlt} size={18} color="#fff"/>
             Logout
             </button>

             <button className="blue"><FontAwesomeIcon icon={faEdit}/>Settings</button>

             </div>

           </div>

           <div className="center toggle alphaer right" style={{position:"fixed", display:"flex",
             right:0 , padding:20, marginRight:0 ,width:40, height:40,
          }}>
             <button style={{alignSelf:"center", position:"fixed", 
            }} className="responsive" onClick={showDialog}>
               <FontAwesomeIcon icon={faUserEdit}/></button>
           </div>

           <hr style={{height:0.4, color:"#ddd"}}></hr>

           <div className="hovertoScrollX" style={{marginBottom:7, marginTop:7,paddingBottom:7 ,padding:9,
            height:150, display:"flex", 
          }}
              id = "StoryList"
           >
            { (cards[0]!== "hell")&&
               <StoryRenderer/>
                 }
            {(cards[0]==="hell")&&
                <div className="actions">
                  <Loader type="Audio" color="#00BFFF" height={80} width={80} />
                </div>
            }
           </div>

         
        <div style={{flex:"auto",width:"100%",display:"flex", backgroundColor:"#eee", height:150, overflow:"auto"}}>
            <div className = "grey-color" style={{display:"flex"}}>
              <FontAwesomeIcon icon={faRobot} size="2x" color ="#fff" style={{width:80,height:80}} />
              <p className="biggerwhenlarger" style={{fontWeight:"lighter", fontSize:12, overflow:"hidden", height:66, marginLeft:10}}>Droids! are here to make your life better.Employ!</p>
              <Link to="/droids"><button className="responsive">Employ</button></Link> 
            </div>
            
            <div style={{display:"flex"}} className = "green-color" >
            <FontAwesomeIcon icon={faWifi} size="2x" color ="#fff" style={{width:80,height:80}} />
              <p className="biggerwhenlarger" style={{fontWeight:"lighter", fontSize:12, overflow:"hidden", height:60}}>Check IoT messaging for faster messages and community connections.</p>
              <button className="responsive">Create</button>
            </div>

        </div>
         

           <div className="card" style={{width:"100%", backgroundColor:"#343434", height:232,
           borderRadius:0, margin:0, alignSelf:"center",
             backgroundImage :"url("+ welcomePage + ")", backgroundRepeat:"repeat-x",
             backgroundPosition:"center", alignItems:"center", alignContent:"center",
          
             backgroundSize:"cover"
           }} >
             <button className="fade add" style={{verticalAlign:"bottom", position:"relative", top:100}}>+Add</button>
           </div>

           <div  className="center"> 
            <div className="actions">
                <p style={{fontSize:24}}>Contacts</p>
                <FontAwesomeIcon icon={faUserFriends} size="3x" color="#0087ff"/>
                <div >
                <p style={{color:"#aaa", fontSize:14, 
                alignSelf:"center",margin:10
                }}>Keep in touch with those you love and share the life with them</p>
                </div>
                <div className="inline center right-only" style={{width:'100%'}}>
                  <FontAwesomeIcon color="#aaa" className="responsive-fg padded" icon = {faAlignRight} />
                  <FontAwesomeIcon color="#aaa" className="responsive-fg padded" icon = {faFolderOpen} />
                </div>
            </div>
            <div className="actions">
                <p style={{fontSize:24}}>Projects</p>
                <FontAwesomeIcon icon={faCalendar} size="3x" color="orange"/>
                <div>
                <p style={{color:"#aaa", fontSize:14, margin:10,
               alignSelf:"center"}}>Enjoy 200 Free Cards For your Projects and or your daily life</p>
               </div>
               <div className="inline center right-only">
                  <FontAwesomeIcon color="#aaa" className="responsive-fg padded" icon = {faAlignRight} />
                  <Link to = "/cards">
                  <FontAwesomeIcon color="#aaa" className="responsive-fg padded" icon = {faFolderOpen} />
                  </Link>
                </div>
            </div>
          </div>

          <div  className="center"> 
            <div className="actions">
                <p style={{fontSize:24}}>Account</p>
                <FontAwesomeIcon icon={faUser} size="3x" color="#3def20"/>
                <div >
                <p style={{color:"#aaa", fontSize:14, 
                alignSelf:"center",margin:10
                }}>Keep in touch with those you love and share the life with them</p>
                </div>
                <div className="inline center right-only">
                  <FontAwesomeIcon color="#aaa" className="responsive-fg padded" icon = {faAlignRight} />
                  <Link to = "/user"><FontAwesomeIcon color="#aaa" className="responsive-fg padded" icon = {faFolderOpen} /></Link>
                </div>
            </div>
            <div className="actions">
                <p style={{fontSize:24}}>App Info</p>
                <FontAwesomeIcon icon={faInfo} size="3x" color="red"/>
                <div>
                <p style={{color:"#aaa", fontSize:14, margin:10,
               alignSelf:"center"}}>Enjoy 200 Free Cards For your Projects and or your daily life</p>
               </div>
               <div className="inline center right-only">
                  <FontAwesomeIcon color="#aaa" className="responsive-fg padded" icon = {faAlignRight} />
                  <FontAwesomeIcon color="#aaa" className="responsive-fg padded" icon = {faFolderOpen} />
                </div>
            </div>
            
          </div>

        </div>
    )
}


