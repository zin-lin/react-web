import React from "react";

export class Loading extends React.Component {


        constructor(props) {
            super()
           this.iss = true;
        }

        certion(){

            if (this.iss)
           
       {     var one  = document.getElementById("1").style;
                var two  = document.getElementById("2").style;
                var three  = document.getElementById("3").style;
                var four  = document.getElementById("4").style;
                var five  = document.getElementById("5").style;

                if (one.height === "10px")
                    {   one.height = "70px"
                

                        three.height = "70px"
            

                        five.height = "70px"
                    

                        two.height = "10px"
                    

                        four.height = "10px"
                    
                        }
                else{
    
                one.height = "10px"
                
    
                three.height = "10px"
                
    
                five.height = "10px"
                
    
                two.height = "70px"
                
    
                four.height = "70px"
                
                
                }

                }
        }

        componentDidMount(){
           setInterval( ()=>this.certion, 400)
        }

        componentWillUnmount(){
            this.setState(
                ()=> this.iss = false
            )
        }

     

        render () {
            return (
                <div style={{alignContent:"center", alignItems:"center", display:"flex" , alignSelf:"center", padding:20, marginRight:"calc(50% - 35px)", height:80}}>
                    <div className="vertline" id="1" style={{backgroundColor:"#006677"}}></div>
                    <div className="vertline" id="2" style={{backgroundColor:"#006677"}}></div>
                    <div className="vertline" id="3" style={{backgroundColor:"#006677"}}></div>
                    <div className="vertline" id="4" style={{backgroundColor:"#006677"}}></div>
                    <div className="vertline" id="5" style={{backgroundColor:"#006677"}}></div>
                </div>
            )
        }

}
