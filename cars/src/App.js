import CarValue from './components/CarValue';
import CarForm from './components/CarForm';
import CarList from './components/CarList';
import CarSearch from './components/CarSearch'
import 'bulma/css/bulma.css'
import './styles.css'
export default function App() {
  return (
    <div className='container is-fluid'>     
      <CarForm />
      <CarSearch />
      <CarList />
      <CarValue />
    </div>
  );
}

