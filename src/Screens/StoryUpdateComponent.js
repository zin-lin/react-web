import React from "react";
import Flat from "flatlist-react"
import {StoryCard} from "./storyCards"


export class FlatListStory extends React.Component{

    constructor(props){
        
        super(props)
        this.list = props.data

    }

    render(){
      
        <Flat
        list = {data}
        renderItem ={(dar)=><StoryCard text={dar["name:"]}
        renderWhenEmpty={() => <div>List is empty!</div>}
        /> 
       }
       
        />
    }

}