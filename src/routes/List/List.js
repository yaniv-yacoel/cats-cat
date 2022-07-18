import CatsTable from '../../components/Table/CatsTable';
import './List.css';

export default function List() {
  return (
    <div>
      <div className="title">Welcome to my cat dictionaty, please hover a row for some details or click it for the entire details</div>
      <CatsTable></CatsTable>
    </div>
  );
}