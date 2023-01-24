import React from "react";
import {Route, Switch, Link} from "react-router-dom";
import {Register} from "./RegisterPatterns";
import {Login} from "./SignInPatteerns";


export class UnAutedPage extends React.Component  {

    constructor(props){
        super();
        ;
        //Do nothing
    }

    render()
    {
        return (
        <div>
            <Switch>
            <Route path="/" exact component={Login}/>
            <Route path="/sign-up" exact component={Register}/>
            <Route path="/*" exact render={(props)=> <Login {...props}/>}/>
          </Switch>
          </div>
            )
    }

    //Class is Ready

}
