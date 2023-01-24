import React from "react";

export class ProgressBar extends React.Component {


    constructor(props) {
        super();
        this.doneData = parseInt(props.doneData);
        this.data = parseInt(props.data);

        this.total_data = this.doneData+this.data;

    }

    render(){
        return (
            <div className="gress" style={{padding:0, width:"80%"}}>
              <div className="gress" style={{backgroundColor:"#3ef1cb", width: ((this.doneData/this.total_data)*100).toString() +"%" }}></div>
            </div>
        )
    }

}
