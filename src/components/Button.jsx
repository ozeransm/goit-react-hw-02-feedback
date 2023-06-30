
export const Button = ({handlerBtn})=> {
    return(      
        <div>
            <button onClick={()=>handlerBtn('good')}>Good</button>
            <button onClick={()=>handlerBtn('neutral')}>Neutral</button>
            <button onClick={()=>handlerBtn('bad')}>Bad</button>
        </div>            
    )
}