import './CatsTableHeader.css';
import React from 'react';

function CatsTableHeader(props) {
  const cells = props.headers.map(header => <span key={header} className={`${header}Cell`}>{header}</span>);
  return (
    <div className="headersWrapper">
        {cells}
    </div>    
  );  
}
  
export default CatsTableHeader;
