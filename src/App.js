import './App.css';
import {NavReactor, NavWhenNotSignedInOrAuthed} from "./Navigator";
import MobileNav from "./MobileNavigator";
import {BrowserRouter as R, Route, Switch, useHistory} from "react-router-dom";
import Home from "./Screens/home";
import Chord from "./Screens/chord";
import Music from "./Screens/music";
import logo from "./Assets/cardss.png"
import firebase from "firebase";
import "firebase/auth";
import { useState } from 'react';
import {DroidPage} from "./Screens/BotsOrDroid";
import {UnAutedPage} from "./Auth/IfNotSignedIn";
import Loader from "react-loader-spinner";
import {UserPage} from "./Screens/UserPage";


const appConfig = {
  apiKey: "AIzaSyAVyJqGzPSpmBafjYn-wAG9BdbaN0fbQ0M",
  databaseURL: "https://https://mymate-c286f.firebaseio.com",
  authDomain:"mymate-c286f.firebaseapp.com",
  projectId:"mymate-c286f"
}

try{
firebase.initializeApp(appConfig);}
catch{}
try{
firebase.firestore().enablePersistence()
}catch{}

const auth = firebase.auth();

//LogBox.ignoreAllLogs(true)


export default function App() {


  const his =  useHistory();

  
const HomeStack=()=>{
 if (authed!==null){   
    if (authed){
    
  return  <div className="App">
    
    
      <NavReactor style={{top:0, margin:0}} />
      <MobileNav/>
      <div className="did">
      
      
      
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/music" exact component={Music}/>
          <Route path="/droids" exact component={DroidPage}/>
          <Route path="/user" exact component={UserPage}/>
          <Route path="/cards" exact render={(props)=> <Chord {...props}/>}/>
        </Switch>
        </div>
      </div>
          
    }
    else{
      //firebase.auth().signInWithEmailAndPassword("zinlinhtun34@gmail.com", "tharthar4")

    return(
      <div className="App">
      <NavWhenNotSignedInOrAuthed/>
      <div className="did">
       <UnAutedPage/>
       </div>
      </div>)

      
    }}else{

        return ( 
        <div className="App" style={{alignContent:"center", alignSelf:"center"}}>
        <div className="did">
        <img src={logo} style={{width:160, height:160, marginTop:30}} alt="OK"></img>
        <p style={{fontSize:29, color:"#25303ea9", margin:0}}>Annex: MyMate</p>
        <p style={{color:"#aaa", fontSize:10, margin:0}}>Developed by @Damian James</p>
        <p style={{color:"#ccc", fontSize:9, margin:0}}>From Annex</p>
        <Loader type="Audio" color="#00BFFF" height={80} width={80} />
        </div>
        </div>
        );
    }
}


  const [authed, setAuthed] = useState(null)

  auth.onAuthStateChanged(
    user=>{
        if(user!=null){
          setAuthed(true)
        }
        else{
          
        setAuthed(false);

        }

    }
  )
  
  return (
    
    <R>
     <HomeStack></HomeStack>
    </R>
  );
}

