import { Statistics } from "./Statistics";
import { Button } from "./Button";
import { Notification } from "./Notification";
export const SectionTitle = ({ id, title, children })=>{
    
    return(
    <>
        <h2>{title}</h2>
        {
          
        children.total===0 ? <Notification message="There is no feedback"></Notification> :
                    id==='0' ? <Button handlerBtn={children}/> 
                             : <Statistics stat={children}/>
        }
    </>
    )
}