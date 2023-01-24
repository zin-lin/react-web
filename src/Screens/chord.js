/* eslint-disable react-hooks/exhaustive-deps */
//import React,{Component} from "react";
/* eslint-disable no-unused-vars */
import React,{ useEffect, useState} from "react";
import welcomePage from "../Assets/spybot2.png"
import "firebase/auth";
import Flat from "flatlist-react";
import  firebase from "firebase";
import {FontAwesomeIcon as Fa} from "@fortawesome/react-fontawesome";
import { faCalendar , faIdCard,faArchive,faAmbulance, faUserSecret, faUser, faTools } from "@fortawesome/free-solid-svg-icons";
import assistance from "../Assets/hello.png";
import roboBg from "../Assets/robotBg.png";
import bg from "../Assets/cardbg.png";
import {LukeCard} from "./Card";
import Loader from "react-loader-spinner";
import {useHistory} from "react-router-dom";


export default function Home(){
 
   
    const [cards, setCards] = useState(["hell"])
    const [project, setProj] = useState(["hell"])
    const [ifif , setifif] = useState(false)
 

   let user =   firebase.auth().currentUser;
   var nav = useHistory()
   const RenderCards =()=>{
    return( <Flat style={{marginRight:4}}
     sortBy={["name:", {key: "docId", descending: false}]}
     renderWhenEmpty={()=>{
      return <div style={{flex:"auto",width:"100%",display:"flex"}}>
        <div className="violet-color">
            <p>You have no cards yet, Click here to build your cards</p>
       <button className="orange">+Add</button>
       </div>

       </div>
     }}
     list = {cards}
     renderItem ={(card)=>
        <LukeCard Id= {card.docId} text = {card["name:"]} doneData = {card.doneData} data = {card.data} />
      }
         
     /> )
     
   }

   const ToUser = () => {
     
     nav.push("/user")
   }

   useEffect(()=>{

    
            const un = 
            firebase.firestore().collection("PlanCards").where("userId","==", user.uid).orderBy("name:").onSnapshot(
              sn=>{ 
                var array = []
                sn.docs.map(
                doc => {
                  var x =doc.data()
                  x["docId"] = doc.id;
                  
                  array.push(x)
                }
                
              )
              
              setCards(pre=>array);
              setifif(pre => !pre)
           //   console.log(ifif)
            
            }
            )
      
       
        
            return ()=> un();


      },[setCards])


    useEffect(()=>{
        
        const un = 
        firebase.firestore().collection("Projects").where("userId","==", user.uid).orderBy("name:").onSnapshot(
          sn=>{ 
            var array = []
            sn.docs.map(
            doc => {
              var x =doc.data()
              x["docId"] = doc.id;
              
              array.push(x)
            }
            
          )
          
          setProj(pre=>array);
          setifif(pre => !pre)
       //   console.log(ifif)
        
        }
        )
  
   
    
        return ()=> un();


  },[setCards]
    )


    return (
        <div className="did">
        <div style={{width:"100%", flex:1, overflow:"auto"}}>


            { user!== null &&
            <div>
            <div className="side-nav">
                <div className="tit-violet" style={{width:"100%", paddingTop:30,paddingBottom:30,display:"flex",backgroundPosition:"center"  ,
             backgroundSize:"cover"}}>
                 <img src={roboBg} alt="" style={{width:80, height:80, opacity:0.28, position:"absolute", left:80, top:10}}></img>
                    <Fa icon={faUser} color="#fff" size = "2x" style={{marginLeft:15, marginRight:10}}/>
                    <p style={{color:"#fff", fontWeight:"bold",margin:0,  verticalAlign:"middle", marginTop:5, fontFamily:"Lato", fontSize:17}}>Your Cards</p>
                </div>

                <div style = {{borderRadius:11, padding:5, backgroundColor:"#ef3fff89", margin:7, marginRight:17, marginLeft:17}}>
                <button className="side-nav-component" style={{color:"#fff"}}>+ Add More Project</button>
                </div>

                <div style={{width:"100%", paddingTop:10,paddingBottom:10, overflow:"auto", height:'27%', boxShadow:"inset 0px 2px 8px #bbb", }}>
                <button className="side-nav-component"><Fa icon={faCalendar} style={{marginRight:20}}/>Add Projects</button>
                <button className="side-nav-component"><Fa icon={faIdCard} style={{marginRight:20}}/>Add Card</button>
                <button className="side-nav-component"><Fa icon={faAmbulance} style={{marginRight:20}}/>Report Damage</button>
                <button className="side-nav-component"><Fa icon={faArchive} style={{marginRight:20}}/>Archive Data</button>
                <button className="side-nav-component" onClick={ToUser}><Fa icon={faUser} style={{marginRight:20}}/>My Acc Data</button>
                </div>

             
            </div>

            <div className="grogu" style={{backgroundImage:"url("+bg+")", backgroundSize:"contain",backgroundRepeat:"no-repeat"}}>
                <div style={{overflow:"auto", height:"calc(100vh - 70px)",maxHeight:"calc(100% - 70px)", width:"100%"}}>

                    
                    <p style={{color:"#fff", marginBottom:0, fontSize:23}}>Cards  <button className="green" style={{margin:3}}>Add Card</button></p>

                   

                    
                <div className="hovertoScrollX" style={{height:160, display:"flex",width:'92%',marginLeft:20,backgroundColor:"transparent", marginTop:30 ,paddingRight:10, paddingBottom:10,
                           scrollMargin:20, scrollbarWidth:100
                        }}>
                  {cards[0] !== "hell" &&
                   <RenderCards/>

                  }

                  {
                      cards[0] === "hell" &&
                      <div className="actions">
                      <Loader type="Audio" color="#00BFFF" height={80} width={80} />
                    </div>
                  }

                </div>

                <p style={{color:"#aaa", margin:0, fontSize:19}}>Projects</p>

                <div className="hovertoScrollX" style={{height:160, display:"flex",width:'92%',marginLeft:20,backgroundColor:"transparent", marginTop:17 ,paddingRight:10, paddingBottom:10,
                           scrollMargin:20, scrollbarWidth:100
                        }}>
                 
                
                  <div  style={{borderRadius:12, padding:20,backgroundColor:"#fff03477", boxShadow:"3px 2px 8px #57575799", background:"linear-gradient(to left,#e150d0,#ff0344,#ef3fff )",alignContent:"center",width:180, alignItems:"center", height:100}}>
                          <p style={{fontSize:11, color:"#fff"}}>There is still no projects.<br></br>
                          Common' get your crews and gather</p>
                     <button className="blue"  style={{fontSize:11}}>Add Projects</button>
                     
                  </div>
                  
                </div>



                </div>

               </div>
               </div>

            }

            { user === null &&
            
            <button>Login</button>

            }

    </div></div>
    );
}


