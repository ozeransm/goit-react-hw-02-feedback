import React, { Component } from "react";


import { SectionTitle } from "./SectionTitle";

class App extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positiveFeedback: 0,
  }
  countTotalFeedback(){
    this.setState((prev)=>{return {total: prev.total+1}});
    
  }

  countPositiveFeedbackPercentage(){
    this.setState((prev)=>{return {...prev, positiveFeedback: Math.ceil((prev.good/prev.total)*100)}});

  }
  handlerBtn = (data)=>{
    
    this.setState({ [data]: this.state[data]+1});
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  }

  render(){
    return (
      <div>
        
        <SectionTitle id='0' title="Please leave feedback" children={this.handlerBtn}/>
        <SectionTitle id='1' title="Statistics" children={this.state}/>
        
      </div>
      
      
     
    );
  }
  
}
export default App;

