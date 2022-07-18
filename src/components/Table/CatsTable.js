import './CatsTable.css';
import React, { useState } from 'react';
import CatsTableHeader from '../CatsTableHeader/CatsTableHeader';
import CatsTableFooter from '../CatsTableFooter/CatsTableFooter';
import CatsTableRow from '../CatsTableRow/CatsTableRow';

function CatsTable() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(-1);
  const [hasNext, setHasNext] = useState(true);

  const createRows = () => {
    return data.map((row, idx) =>
      <CatsTableRow key={row.id}
        data={row}
        labels={['name', 'temperament', 'origin', 'life_span']}
        odd={idx % 2 === 1 ? true : false}></CatsTableRow>);
  }

  const changePageHandler = dir => {
    const newPage = page + dir
    fetch(`https://api.thecatapi.com/v1/breeds?limit=10&page=${page + dir}`).then(response => response.json()).then(data => {
      setData(data);
      setPage(newPage);
    });
    fetch(`https://api.thecatapi.com/v1/breeds?limit=10&page=${page + dir + 1}`).then(response => response.json()).then(data => {
      setHasNext(data.length > 0);
    });
  }
  if (page === -1) {
    changePageHandler(1);
  }
  return (
      <div className="catsTable">
        <CatsTableHeader headers={['Name', 'Temperament', 'Origin', 'Life Span']}></CatsTableHeader>
        {data.length ? <div className="tableContent">{createRows()}</div> : <div className="tableContent noData">Loading...</div>}
        <CatsTableFooter page={page} data={data} hasMoreRecords={hasNext} changePage={changePageHandler}></CatsTableFooter>
      </div>
  );
}
export default CatsTable;