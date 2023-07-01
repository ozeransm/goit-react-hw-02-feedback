import PropTypes from 'prop-types';
export const Statistics = ({stat:{ good, neutral, bad, total, positiveFeedback }})=>{
   
    return(
        <div>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive feedback: {positiveFeedback}</p>
        </div>
    )
}
Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positiveFeedback: PropTypes.number,
}