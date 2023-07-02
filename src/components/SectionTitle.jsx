import { Statistics } from "./Statistics";
import { Notification } from "./Notification";
export const SectionTitle = ({ state, total, positiveFeedback, handlerBtn })=>{
    
    return(
    <>
       {
        Object.keys(state).map((elem,i)=><button key={i} onClick={()=>handlerBtn(elem)}>{elem}</button>)
       }
       <h2>Statistics</h2>
       {
       total()!==0 ? <Statistics state={state} total={total} positiveFeedback={positiveFeedback}/>
                   : <Notification message={'No feedback given'}/>
       }
       
        
    </>
    )
}
