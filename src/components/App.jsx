import React, { Component } from "react";
import css from './App.module.css';

import { SectionTitle } from "./SectionTitle";

class App extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    
  }
  countTotalFeedback(){
    return this.state.good+this.state.neutral+this.state.bad;
  }
  
  handlerBtn = (data)=>{
    this.setState({ [data]: this.state[data]+1});
  }

  render(){
    return (
      <div className={css.common}>
          <h1>Please leave feedback</h1>
          <SectionTitle state={this.state} total={()=>this.countTotalFeedback()} handlerBtn={this.handlerBtn}/>
      </div>
    );
  }
  
}
export default App;

