import './CatsTableFooter.css';
import React from 'react';

function CatsTableFooter(props) {
  const hasPrev = props.page > 0;
  const from = props.page * 10 + 1;
  const to = from + props.data.length - 1;
  const hasNext = props.hasMoreRecords;
  const prevClicked = () => {
    if (hasPrev) {
      props.changePage(-1);
    }
  }
  const nextClicked = () => {
    if (hasNext) {
      props.changePage(1);
    }
  }
  return (
    
      <div className="footerWrapper">
        {props.data.length ? (<div><input type="button" 
              className={hasPrev ? "footerButton" : "footerButton disabled"} 
              value="Previous" 
              onClick={() => prevClicked()}/>
        <span className="info">Showing rows {from} - {to}</span>
        <input type="button" 
              className={hasNext ? "footerButton" : "footerButton disabled"} 
              value="Next" 
              onClick={() => nextClicked()}/></div>) : ''}
      </div>
  );  
}
  
export default CatsTableFooter;
