import './CatsTableRow.css';
import React from 'react';
import { Link } from 'react-router-dom';

function CatsTableRow(props) {
  const createRow = () => {
    return props.labels.map(key => <span key={key} className={`${key}Cell`}>{props.data[key]}</span>)
  }
  return (
    <Link to={`/${props.data.id}`}>
      <div className={props.odd ? "odd rowWrapper" : "rowWrapper"} title={props.data.description}>
        {createRow()}
      </div>
    </Link>

  );
}

export default CatsTableRow;
